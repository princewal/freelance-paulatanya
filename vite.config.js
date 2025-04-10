import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    host: true,
  },
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
        about: path.resolve(__dirname, "about.html"),
      },
      outDir: "dist",
      assetsDir: "assets",
    },
    cssCodeSplit: false,
    assetsInlineLimit: 0,
  },
});
