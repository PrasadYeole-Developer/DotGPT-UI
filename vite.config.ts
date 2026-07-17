import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      manifest: {
        name: "Dot-GPT",
        short_name: "Dot",
        description: "Your Artificial Chat Buddy!",
        theme_color: "#141618",
        background_color: "#141618",
        icons: [
          {
            src: "icons/Dot-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "icons/Dot-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "icons/Dot-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "icons/Dot-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/Dot-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "icons/Dot-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "icons/Dot-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/Dot-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/Dot-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/Dot-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        start_url: "/",
        display: "standalone",
      },
      registerType: "autoUpdate",
    }),
  ],
});
