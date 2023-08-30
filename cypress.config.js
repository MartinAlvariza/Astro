const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: 'https://admin-staging.astrocap.com/admin/login',
  },
  defaultCommandTimeout: 8000,
  pageLoadTimeoyt: 10000,
  viewportHeight: 860,
  viewportWidth: 1400,
  projectId: 'behts9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/Astro/Tests/*.js',
  },
});

