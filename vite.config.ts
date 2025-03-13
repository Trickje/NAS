import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
  ],
  esbuild: {
    loader: "tsx",
    include: /\.[jt]sx?$/,
  },
  server: {
    open: true,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
  base: "/",
  build: mode === "production" ? { outDir: "dist" } : undefined, // Only build to `dist` in production
}));
