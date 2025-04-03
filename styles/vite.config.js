import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${path.resolve(
          __dirname,
          "styles/scss/global.scss"
        )}";`,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        /* testimonial: path.resolve(__dirname, 'testimonial.html'), */
        "south-sudan": path.resolve(__dirname, "south-sudan.html"),
      },
      lib: {
        entry: path.resolve(__dirname, "styles/scss/global.scss"),
        name: "styles", // You can name the library here (just for better identification)
        fileName: "styles/styles", // The final output file will be styles/styles.css
      },
    },
  },
});
