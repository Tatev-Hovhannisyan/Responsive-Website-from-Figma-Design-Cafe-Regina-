// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Responsive-Website-from-Figma-Design-Cafe-Regina-/", // путь к репозиторию на GitHub Pages
});
