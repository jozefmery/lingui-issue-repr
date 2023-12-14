//--------------------------------------------------------------------------------------------------------------------//

import type { LinguiConfig } from "@lingui/conf";

//--------------------------------------------------------------------------------------------------------------------//

const config: LinguiConfig = {
  catalogs: [
    {
      include: ["<rootDir>/app/routes/{name}"],
      path: "<rootDir>/app/content/locales/dynamic/{name}/{locale}",
    },
  ],
  // fallback to english messages if not found in current
  fallbackLocales: { default: "en" },
  locales: ["en", "es"], // create array copy to prevent error
  orderBy: "origin",
  sourceLocale: "en",
};

export default config;
