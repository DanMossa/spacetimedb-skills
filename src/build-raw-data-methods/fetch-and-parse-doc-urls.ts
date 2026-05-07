import { HTMLElement, parse } from "node-html-parser";


/**
 * Example of href: '/docs/tutorials/unreal/part-1'
 */
export type DocUrl = {
  pageTitle: string;
  href: string;
};

const DOCS_URL = "https://spacetimedb.com/docs/";
const DOCS_ORIGIN = "https://spacetimedb.com";

export async function fetchAndParseDocUrls(): Promise<DocUrl[]> {
  const docUrls: DocUrl[] = [];
  const seenHrefs = new Set<string>();
  const fetchedUrls = new Set<string>();
  const pendingUrls = [DOCS_URL];

  while (pendingUrls.length > 0) {
    const url = pendingUrls.shift();

    if (!url || fetchedUrls.has(url)) {
      continue;
    }

    fetchedUrls.add(url);

    const sidebar = await fetchDocsSidebar(url);

    for (const docUrl of parseSidebarDocUrls(sidebar)) {
      if (seenHrefs.has(docUrl.href)) {
        continue;
      }

      seenHrefs.add(docUrl.href);
      docUrls.push(docUrl);

      if (docUrl.href.startsWith("/docs/")) {
        pendingUrls.push(new URL(docUrl.href, DOCS_ORIGIN).toString());
      }
    }
  }

  return docUrls;
}

async function fetchDocsSidebar(url: string): Promise<HTMLElement> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch SpacetimeDB docs sidebar from ${url}: ${response.status} ${response.statusText}`,
    );
  }

  const html = await response.text();
  const root = parse(html);
  const sidebar = root.querySelector('nav[aria-label="Docs sidebar"]');

  if (!sidebar) {
    throw new Error("Could not find SpacetimeDB docs sidebar nav.");
  }

  return sidebar;
}

function parseSidebarDocUrls(sidebar: HTMLElement): DocUrl[] {
  return sidebar
    .querySelectorAll("a[href]")
    .map((link): DocUrl | null => {
      const href = link.getAttribute("href")?.trim();

      if (
        !href ||
        href === "#" ||
        href.includes("ask-ai") ||
        href.includes("intro/zen") ||
        href.includes("language-support")
      ) {
        return null;
      }

      const label = link.querySelector("span");
      const pageTitle =
        label?.getAttribute("title")?.trim() ||
        label?.text.trim() ||
        link.text.trim();

      if (!pageTitle) {
        return null;
      }

      return { pageTitle, href };
    })
    .filter((docUrl): docUrl is DocUrl => docUrl !== null);
}
