import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const Head: React.FC<{
  children: ReactNode;
  className?: string;
  filePath?: string;
}> = ({ children, className }) => {
  const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter } = useConfig();
  const url =
    "https://docu-541dc1.pages.fhnw.ch" +
    (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || "Nextra"} />
      <meta
        property="og:description"
        content={frontMatter.description || "The next site builder"}
      />
      <link rel="icon" type="image/svg" sizes="16x16" href="/favicon.svg" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <script
        defer
        data-domain="docu-541dc1.pages.fhnw.ch"
        src="https://plausible.tbuser.dev/js/script.file-downloads.hash.outbound-links.js"
      ></script>
    </>
  );
};

export default Head;
