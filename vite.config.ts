import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";

import { fileURLToPath, URL } from "url";
import path from "path";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@components",
        replacement: fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
      },
      {
        find: "@hooks",
        replacement: fileURLToPath(new URL("./src/hooks", import.meta.url)),
      },
      {
        find: "@example",
        replacement: fileURLToPath(new URL("./src/example", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    ],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/main.js"),
      name: "GalleryFy",
      formats: ["es", "umd"],
      fileName: (format) => `main.${format}.js`,
    },

    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    typescript({
      target: "es2022",
      rootDir: "./src",
      declaration: true,
      declarationDir: "./dist",
      exclude: "./node_modules/**",
      allowSyntheticDefaultImports: true,
    }),
    react(),
  ],
});
