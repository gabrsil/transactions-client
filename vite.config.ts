import relay from "vite-plugin-relay";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [relay, react()],
  server: {
    host: '127.0.0.1',
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      find: "@", 
      replacement: resolve(__dirname, './src') 
    },
  },
});
