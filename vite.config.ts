import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vanillaExtractPlugin(), react()],
  server: {
    port: 3000,
  },
  preview: {
    host: "127.0.0.1",
    port: 3000,
  },
});
