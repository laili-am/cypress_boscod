const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.boscod.com:4001/",
    setupNodeEvents(on, config) {
      // Konfigurasi lain jika diperlukan
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
