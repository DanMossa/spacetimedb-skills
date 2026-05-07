import { DocUrl } from "./fetch-and-parse-doc-urls";
import { parse } from "node-html-parser";

export type DocRawUrl = {
  pageTitle: string;
  href: string;
};

const DOCS_ORIGIN = "https://spacetimedb.com";
const RAW_GITHUB_ORIGIN = "https://raw.githubusercontent.com";

export async function convertDocUrlsToRawDocUrls(
  docUrls: DocUrl[],
): Promise<DocRawUrl[]> {
  const rawDocUrls: DocRawUrl[] = [];

  for (const docUrl of docUrls) {
    const pageUrl = new URL(docUrl.href, DOCS_ORIGIN).toString();
    const rawHref = await fetchRawHrefFromDocPage(pageUrl);

    rawDocUrls.push({
      pageTitle: toPathTitle(docUrl.href),
      href: rawHref,
    });
  }

  return rawDocUrls;
}

async function fetchRawHrefFromDocPage(pageUrl: string): Promise<string> {
  const response = await fetch(pageUrl);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch doc page ${pageUrl}: ${response.status} ${response.statusText}`,
    );
  }

  const html = await response.text();
  const root = parse(html);
  const editLink = root.querySelector("a.theme-edit-this-page[href]");
  const editHref = editLink?.getAttribute("href")?.trim();

  if (!editHref) {
    throw new Error(`Could not find "Edit this page" link in ${pageUrl}`);
  }

  return convertGithubEditUrlToRawUrl(editHref);
}

function convertGithubEditUrlToRawUrl(githubEditUrl: string): string {
  const url = new URL(githubEditUrl);
  const path = url.pathname.replace(/^\/+/, "");
  const editPathSegment = "/edit/";
  const editIndex = path.indexOf(editPathSegment);

  if (url.hostname !== "github.com" || editIndex < 0) {
    throw new Error(`Invalid GitHub edit URL: ${githubEditUrl}`);
  }

  const repoPath = path.slice(0, editIndex);
  const editTarget = path.slice(editIndex + editPathSegment.length);
  const firstSlash = editTarget.indexOf("/");

  if (firstSlash < 0) {
    throw new Error(`Could not parse branch/path from URL: ${githubEditUrl}`);
  }

  const branch = editTarget.slice(0, firstSlash);
  const filePath = editTarget.slice(firstSlash + 1);

  return `${RAW_GITHUB_ORIGIN}/${repoPath}/refs/heads/${branch}/${filePath}`;
}

function toPathTitle(href: string): string {
  const normalizedPath = getPathname(href)
    .replace(/^\/docs\/?/, "")
    .replace(/\/+$/, "");

  if (!normalizedPath) {
    return "docs";
  }

  return normalizedPath.replace(/\//g, "-");
}

function getPathname(href: string): string {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return new URL(href).pathname;
  }

  return href;
}
