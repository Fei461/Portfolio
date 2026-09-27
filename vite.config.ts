import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  // GitHub Pages sirve este repositorio bajo /Portfolio/; en local se mantiene la raíz.
  base: process.env.VITE_BASE_PATH ?? "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
