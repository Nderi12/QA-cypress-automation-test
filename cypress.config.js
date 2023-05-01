const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pet-shop.buckhill.com.hr',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
