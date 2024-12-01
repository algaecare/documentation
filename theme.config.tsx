import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Download from "./components/Download";
import Logo from "./components/Logo";
import Head from "./components/Head";

export default {
  docsRepositoryBase:
    "https://gitlab.fhnw.ch/ip12-24vt/ip12-24vt_algae_care/docs",
  project: {
    link: "https://gitlab.fhnw.ch/ip12-24vt/ip12-24vt_algae_care",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
        <path d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z" />
      </svg>
    ),
  },
  logo: Logo,
  color: {
    hue: 181,
    saturation: 99,
    lightness: {
      dark: 40,
      light: 45,
    },
  },
  search: {
    placeholder: "Seite durchsuchen...",
  },
  feedback: {
    content: null,
    component: null,
  },
  footer: {
    content: null,
    components: null,
  },
  editLink: {
    component: Download,
  },
  head: Head,
  themeSwitch: {
    useOptions() {
      return {
        light: "heller Modus",
        dark: "dunkler Modus",
        system: "System folgen",
      };
    },
  },
  toc: {
    title: "Auf dieser Seite",
    backToTop: "Zurück nach oben",
  },
} as DocsThemeConfig;
