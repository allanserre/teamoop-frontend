import { defineConfig } from 'cypress'

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
    'baseUrl': 'http://localhost:4200'
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
  }

})
