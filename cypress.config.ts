import { defineConfig } from "cypress"

export default defineConfig({
  includeShadowDom: true,
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
})
