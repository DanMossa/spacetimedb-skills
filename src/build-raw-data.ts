import {
  type DocUrl,
  fetchAndParseDocUrls,
} from "./build-raw-data-methods/fetch-and-parse-doc-urls";
import {
  convertDocUrlsToRawDocUrls,
  DocRawUrl,
} from "./build-raw-data-methods/convert-doc-urls-to-raw-doc-urls";
import { downloadRawDocs } from "./build-raw-data-methods/save-raw-documents";

async function main() {
  console.log("Fetching URLs");
  const docUrls: DocUrl[] = await fetchAndParseDocUrls();

  console.log("URLs found:");
  console.dir(docUrls);

  console.log("Finding raw doc urls");
  const rawDocUrls: DocRawUrl[] = await convertDocUrlsToRawDocUrls(docUrls);

  console.log("Raw doc urls found:");
  console.dir(rawDocUrls);

  console.log("Downloading raw docs");
  await downloadRawDocs(rawDocUrls);
  console.log("Done downloading raw docs");
}

void main();
