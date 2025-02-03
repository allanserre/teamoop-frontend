import { defineConfig } from 'cypress';
import * as fs from 'node:fs';

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    overwrite: false,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on) {
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
  video: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
    viewportWidth: 500,
    viewportHeight: 500,
  },
});
