import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { DocRawUrl } from "./convert-doc-urls-to-raw-doc-urls";

const RAW_DATA_OUTPUT_DIR = path.join(getCwd(), "raw-data-output");

export async function downloadRawDocs(rawDocUrls: DocRawUrl[]): Promise<void> {
  await mkdir(RAW_DATA_OUTPUT_DIR, { recursive: true });

  const usedFileNames = new Set<string>();

  for (const rawDocUrl of rawDocUrls) {
    const response = await fetch(rawDocUrl.href);

    if (!response.ok) {
      throw new Error(
        `Failed to download raw doc ${rawDocUrl.href}: ${response.status} ${response.statusText}`,
      );
    }

    const fileContents = await response.text();
    const fileName = ensureUniqueFileName(
      toSafeFileName(rawDocUrl.pageTitle),
      usedFileNames,
    );
    const filePath = path.join(RAW_DATA_OUTPUT_DIR, fileName);

    await writeFile(filePath, fileContents, "utf8");
  }
}

function toSafeFileName(pageTitle: string): string {
  const normalized = pageTitle
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return normalized.length > 0 ? `${normalized}.md` : "doc.md";
}

function ensureUniqueFileName(
  fileName: string,
  usedFileNames: Set<string>,
): string {
  if (!usedFileNames.has(fileName)) {
    usedFileNames.add(fileName);
    return fileName;
  }

  const extension = path.extname(fileName);
  const baseName = fileName.slice(0, fileName.length - extension.length);

  let counter = 2;
  while (true) {
    const candidate = `${baseName}-${counter}${extension}`;

    if (!usedFileNames.has(candidate)) {
      usedFileNames.add(candidate);
      return candidate;
    }

    counter += 1;
  }
}

function getCwd(): string {
  const processRef = (globalThis as { process?: { cwd?: () => string } })
    .process;
  return processRef?.cwd?.() ?? ".";
}
