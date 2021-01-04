const path = require("path");

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@util": path.join(__dirname, "src/utils"),
        "@req": path.join(__dirname, "src/utils/req"),
        "@comp": path.join(__dirname, "src/components"),
        "@composition": path.join(__dirname, "src/compositions"),
      },
    },
  },
};
