import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

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
  logo: <h1 style={{ fontWeight: 600 }}>🌱 Algae Care</h1>,
  color: {
    hue: 84,
    saturation: 88,
    lightness: {
      dark: 80,
      light: 40,
    },
  },
  search: {
    placeholder: "Seite durchsuchen...",
  },
  feedback: {
    content: null,
  },
  footer: {
    content: null,
    components: null,
  },
  faviconGlyph: "🌱",
  themeSwitch: {
    useOptions() {
      return {
        light: "heller Modus",
        dark: "dunkler Modus",
        system: "System folgen",
      };
    },
  },
} as DocsThemeConfig;
