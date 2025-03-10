"use client";

import React, { ReactNode } from "react";

function getTitle() {
  const preTitle = "Algae Care - ";

  const title = document
    .querySelector("meta[property='og:title']")
    ?.getAttribute("content");
  return title ? preTitle + title : preTitle + document.title;
}

function getContent() {
  const originalContent = document.querySelector("article");

  if (!originalContent) {
    throw new Error("No content found");
  }

  // Create a copy of the content
  const contentCopy = originalContent.cloneNode(true) as HTMLElement;

  const divToRemove = contentCopy.querySelector(
    "._mb-8._flex._items-center._border-t._pt-8.dark\\:_border-neutral-800.contrast-more\\:_border-neutral-400.dark\\:contrast-more\\:_border-neutral-400.print\\:_hidden"
  );
  if (divToRemove) {
    divToRemove.remove();
  }

  return contentCopy;
}

async function downloadPDF(content: HTMLElement, title: string) {
  // @ts-expect-error
  const html2pdf = (await import("html2pdf.js")).default;
  if (document.documentElement.classList.contains("dark")) {
    content.style.backgroundColor = "#111";
  }

  const opt = {
    margin: 5,
    filename: title,
    pagebreak: { mode: ["avoid-all"] },
    image: { type: "jpeg", quality: 0.95 },
    enableLinks: true,
    html2canvas: {
      scale: 7.5,
      removeContainer: true,
    },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  await html2pdf().set(opt).from(content).save();
  if (document.documentElement.classList.contains("dark")) {
    content.style.backgroundColor = "";
  }
}

function downloadHTML(content: HTMLElement, title: string) {
  const html = `<!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      ${content.outerHTML}
    </body>
    </html>`;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${title}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadDOC(content: HTMLElement, title: string) {
  var header =
    "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
    "xmlns:w='urn:schemas-microsoft-com:office:word' " +
    "xmlns='http://www.w3.org/TR/REC-html40'>" +
    `<head><meta charset='utf-8'><title>${title}</title></head><body>`;
  var footer = "</body></html>";
  var sourceHTML = header + content.innerHTML + footer;

  var source =
    "data:application/vnd.ms-word;charset=utf-8," +
    encodeURIComponent(sourceHTML);
  var fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = `${title}.doc`;
  fileDownload.click();
  document.body.removeChild(fileDownload);
}

async function downloadMDX(content: HTMLElement, title: string) {
  // @ts-expect-error
  const TurndownService = (await import("turndown")).default;
  const turndownService = new TurndownService();

  const markdown = turndownService.turndown(content.innerHTML);
  const markdownBlob = new Blob([markdown], { type: "text/markdown" });

  const markdownUrl = URL.createObjectURL(markdownBlob);
  const markdownLink = document.createElement("a");
  markdownLink.href = markdownUrl;
  markdownLink.download = `${title}.md`;
  markdownLink.click();

  URL.revokeObjectURL(markdownUrl);
}

async function downloadADOC(content: HTMLElement, title: string) {
  // @ts-expect-error
  const TurndownService = (await import("turndown")).default;
  const turndownService = new TurndownService();

  turndownService.addRule("heading", {
    filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
    replacement: (content: any, node: { tagName: any[] }) => {
      const level = node.tagName[1];
      return `${"=".repeat(level)} ${content}\n`;
    },
  });

  turndownService.addRule("bold", {
    filter: ["strong", "b"],
    replacement: (content: any) => `*${content}*`,
  });

  turndownService.addRule("italic", {
    filter: ["em", "i"],
    replacement: (content: any) => `_${content}_`,
  });

  turndownService.addRule("link", {
    filter: "a",
    replacement: (
      content: any,
      node: { getAttribute: (arg0: string) => any }
    ) => {
      const href = node.getAttribute("href");
      return `link:${href}[${content}]`;
    },
  });

  const adoc = turndownService.turndown(content.innerHTML);
  const adocBlob = new Blob([adoc], { type: "text/plain" });
  const adocUrl = URL.createObjectURL(adocBlob);
  const adocLink = document.createElement("a");
  adocLink.href = adocUrl;
  adocLink.download = `${title}.adoc`;
  adocLink.click();
  URL.revokeObjectURL(adocUrl);
}

const Download: React.FC = () => {
  const [loading, setLoading] = React.useState<
    "pdf" | "html" | "doc" | "mdx" | "adoc" | null
  >(null);
  const loadingText = "Datei wird exportiert...";

  async function downloadFile(type: "pdf" | "html" | "doc" | "mdx" | "adoc") {
    setLoading(type);

    const content = getContent();
    const title = getTitle();

    switch (type) {
      case "pdf":
        await downloadPDF(content, title);
        break;
      case "html":
        downloadHTML(content, title);
        break;
      case "doc":
        downloadDOC(content, title);
        break;
      case "mdx":
        downloadMDX(content, title);
        break;
      case "adoc":
        await downloadADOC(content, title);
        break;
    }
    setLoading(null);
  }

  return (
    <>
      <div className="flex items-center space-x-2">
        {loading === "pdf" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="animate-spin"
          >
            <path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z"></path>
          </svg>
        )}
        <button
          onClick={async () => {
            await downloadFile("pdf");
          }}
        >
          {loading === "pdf" ? loadingText : "Exportieren als PDF"}
        </button>
      </div>
      <div className="flex items-center space-x-2">
        {loading === "html" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="animate-spin"
          >
            <path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M216,120V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v80a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48v24a8,8,0,0,0,16,0ZM160,51.31,188.69,80H160ZM68,160v48a8,8,0,0,1-16,0V192H32v16a8,8,0,0,1-16,0V160a8,8,0,0,1,16,0v16H52V160a8,8,0,0,1,16,0Zm56,0a8,8,0,0,1-8,8h-8v40a8,8,0,0,1-16,0V168H84a8,8,0,0,1,0-16h32A8,8,0,0,1,124,160Zm72,0v48a8,8,0,0,1-16,0V184l-9.6,12.8a8,8,0,0,1-12.8,0L148,184v24a8,8,0,0,1-16,0V160a8,8,0,0,1,14.4-4.8L164,178.67l17.6-23.47A8,8,0,0,1,196,160Zm56,48a8,8,0,0,1-8,8H216a8,8,0,0,1-8-8V160a8,8,0,0,1,16,0v40h20A8,8,0,0,1,252,208Z"></path>
          </svg>
        )}
        <button
          onClick={async () => {
            await downloadFile("html");
          }}
        >
          {loading === "html" ? loadingText : "Exportieren als HTML"}
        </button>
      </div>
      <div className="flex items-center space-x-2">
        {loading === "doc" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="animate-spin"
          >
            <path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M52,144H36a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8H52a36,36,0,0,0,0-72Zm0,56H44V160h8a20,20,0,0,1,0,40Zm169.53-4.91a8,8,0,0,1,.25,11.31A30.06,30.06,0,0,1,200,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30.06,30.06,0,0,1,21.78,9.6,8,8,0,0,1-11.56,11.06A14.24,14.24,0,0,0,200,160c-8.82,0-16,9-16,20s7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,0,1,221.53,195.09ZM128,144c-17.65,0-32,16.15-32,36s14.35,36,32,36,32-16.15,32-36S145.65,144,128,144Zm0,56c-8.82,0-16-9-16-20s7.18-20,16-20,16,9,16,20S136.82,200,128,200ZM48,120a8,8,0,0,0,8-8V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM160,51.31,188.69,80H160Z"></path>
          </svg>
        )}
        <button
          onClick={async () => {
            await downloadFile("doc");
          }}
        >
          {loading === "doc" ? loadingText : "Exportieren als DOC (Word)"}
        </button>
      </div>
      <div className="flex items-center space-x-2">
        {loading === "mdx" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="animate-spin"
          >
            <path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V224a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM144,144H128a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h16a36,36,0,0,0,0-72Zm0,56h-8V160h8a20,20,0,0,1,0,40Zm-40-48v56a8,8,0,0,1-16,0V177.38L74.55,196.59a8,8,0,0,1-13.1,0L48,177.38V208a8,8,0,0,1-16,0V152a8,8,0,0,1,14.55-4.59L68,178.05l21.45-30.64A8,8,0,0,1,104,152Z"></path>
          </svg>
        )}
        <button
          onClick={async () => {
            await downloadFile("mdx");
          }}
        >
          {loading === "mdx" ? loadingText : "Exportieren als MD (Markdown)"}
        </button>
      </div>
      <div className="flex items-center space-x-2">
        {loading === "adoc" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="animate-spin"
          >
            <path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"></path>
          </svg>
        )}
        <button
          onClick={async () => {
            await downloadFile("adoc");
          }}
        >
          {loading === "adoc" ? loadingText : "Exportieren als ADOC (AsciiDoc)"}
        </button>
      </div>
    </>
  );
};

export default Download;
