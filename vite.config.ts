import { defineConfig } from "vite";
import React from "@vitejs/plugin-react-swc";
import { ViteAliases } from "vite-aliases";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    React(),
    ViteAliases({
      dir: "src",
      deep: true,
      depth: 2,
      prefix: "@",
      useConfig: false,
      useTypescript: false,
    }),
  ],
});
