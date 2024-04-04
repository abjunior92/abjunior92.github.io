import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import rehypePrettyCode from "rehype-pretty-code";

const options = {
  keepBackground: false
};

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, options]]
  },
  site: "https://blog.coders51.com",
  integrations: [mdx(), sitemap(), tailwind(), react()],
  server: {
    host: true
  }
});
