const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app.boscod.com",
    setupNodeEvents(on, config) {
      // Konfigurasi lain jika diperlukan
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});