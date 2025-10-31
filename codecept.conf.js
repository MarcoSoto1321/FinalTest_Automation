const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.mercadolibre.com/',
      show: false
    }
  },
  include: {
    I: './steps_file.js',
    finaltestPage: './pages/finaltestPage.js'
  },
  plugins: {
    htmlReporter: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    },
  },
  gherkin: {
    features: './features/*.feature',
    steps: ['./steps/finaltestStep.js']
  },
  name: 'finaltest'
}