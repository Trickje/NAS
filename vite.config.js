import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /\.[jt]sx?$/,
  },
  build: {
    outDir: "dist",
  },
  base: "/",
  server: {
    open: true,
    proxy: {
      "/api": "http://localhost:8080", // Forward API requests to Express backend
    },
  },
});
