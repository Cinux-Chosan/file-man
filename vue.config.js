const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@req": path.join(__dirname, "src/utils/req"),
        "@composition": path.join(__dirname, "src/compositions"),
      }
    }
  },
}