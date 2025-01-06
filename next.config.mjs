import nextra from "nextra";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["obsidian"] = false;
      config.resolve.alias["@codemirror/state"] = false;
      config.resolve.alias["@codemirror/view"] = false;
    }
    return config;
  },
};
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra(nextConfig);
