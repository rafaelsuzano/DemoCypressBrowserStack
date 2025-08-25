const { defineConfig } = require("cypress");
const browserstackTestObservabilityPlugin = require('browserstack-cypress-cli/bin/testObservability/plugin');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    
    browserstackTestObservabilityPlugin(on, config);
    return config;
    },
  },
});
