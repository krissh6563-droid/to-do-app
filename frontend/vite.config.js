import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  compilerOptions: {
    target: "es6",
    module: ["commonjs", "jsx"],
    baseUrl: ".",
  },
  include: ["src/*/"],
  exclude: ["node_modules"],
});
