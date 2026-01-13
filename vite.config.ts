import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    middlewareMode: false,
    headers: {
      "Content-Type": "application/javascript",
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    copyPublicDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "favicon.svg") {
            return "favicon.svg";
          }
          return "assets/[name]-[hash].[ext]";
        },
      },
    },
  },
});
