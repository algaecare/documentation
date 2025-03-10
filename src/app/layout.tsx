import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

// CUSTOM COMPONENTS
import Logo from "@/components/Logo";
import Download from "@/components/Download";
import "./globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={<Logo />}
    projectLink="https://gitlab.fhnw.ch/ip12-24vt/ip12-24vt_algae_care"
    projectIcon={
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
        <path d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z" />
      </svg>
    }

    // ... Your additional navbar options
  />
);
const footer = <Footer></Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="de"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        color={{
          hue: 175,
          saturation: 49,
          lightness: 45,
        }}
        backgroundColor={{
          dark: "#000000",
          light: "#ffffff",
        }}
        // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://gitlab.fhnw.ch/ip12-24vt/ip12-24vt_algae_care/docu"
          feedback={{
            content: null,
          }}
          /* editLink={<Download />} */
          footer={footer}
          toc={{
            backToTop: "Nach oben",
            float: true,
            title: "Inhaltsverzeichnis",
          }}
          themeSwitch={{
            dark: "Dunkel",
            light: "Hell",
            system: "System",
          }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
