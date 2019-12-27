module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'cn',
      fallbackLocale: 'cn',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/variables.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module.rule('pug')
        .test(/\.pug$/)
        .use('pug-html-loader')
        .loader('pug-html-loader')
        .end()
  }
}
