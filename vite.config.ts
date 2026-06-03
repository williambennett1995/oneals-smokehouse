import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// `base` must match the GitHub repo name so assets load from the Pages subpath
// (https://<user>.github.io/oneals-smokehouse/). Change it if you rename the repo.
export default defineConfig({
  base: "/oneals-smokehouse/",
  plugins: [react()],
});
