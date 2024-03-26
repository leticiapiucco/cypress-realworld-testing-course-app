import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'jqd4g8',
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
  video: true
});
