//--------------------------------------------------------------------------------------------------------------------//

import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { lingui } from "@lingui/vite-plugin";
import { defineConfig } from "vite";
import macros from "vite-plugin-babel-macros";
import tsconfigPaths from "vite-tsconfig-paths";

//--------------------------------------------------------------------------------------------------------------------//

export default defineConfig({
  plugins: [
    macros(),
    lingui(),
    remix({
      assetsBuildDirectory: "./public/build",
      ignoredRouteFiles: ["**/.*"],
      publicPath: "/build/",
      serverBuildPath: "./build/index.js",
      serverModuleFormat: "esm",
    }),
    tsconfigPaths(),
  ],

  server: { port: 3000 },
  ssr: {
    noExternal: ["@lingui/macro"],
  },
});
