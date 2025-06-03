import devtoolsJson from 'vite-plugin-devtools-json';
import tsconfigPaths from "vite-tsconfig-paths";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [devtoolsJson(), reactRouter(), tsconfigPaths()],
});
