import { defineConfig } from 'cypress';
import * as fs from 'node:fs';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    overwrite: false,
    embeddedScreenshots: true,
    inlineAssets: true,
    html : false,
    json: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on) {
      require('cypress-mochawesome-reporter/plugin')(on)
      on('after:spec', (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some(test => test.attempts.some(attempt => attempt.state === 'failed'));
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video);
          }
        }
      });
    },
  },
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  component: {
    setupNodeEvents(on) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
    viewportWidth: 500,
    viewportHeight: 500,
  },
});
