import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        "south-sudan": path.resolve(__dirname, "south-sudan.html"),
        book: path.resolve(__dirname, "book.html"),
        testimonial: path.resolve(__dirname, "testimonial.html"),
      },
      outDir: "dist",
      assetsDir: "assets",
    },
    cssCodeSplit: false,
  },
});
