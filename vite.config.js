import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /\.[jt]sx?$/,
  },
  build: {
    outDir: "dist/public",
    base: "/dist/public/",
    rollupOptions: {
      input: "public/js/HelloWorld.jsx",
    },
  },
  base: "/",
  server: {
    open: true,
    port: 3000,
  },
});
