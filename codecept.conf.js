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
      // 1. Añade un User Agent de un navegador real
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      
      // 2. Define un tamaño de ventana de escritorio estándar
      viewport: {
        width: 1920,
        height: 1080
      },
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