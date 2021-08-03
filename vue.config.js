//這裡寫的配置會和其他配置結合
const path = require("path");

module.exports = {
  //配置別名
  configureWebpack: {
    resolve: {
      alias: {
        // "@": "src", //已經默認配置
        assets: "@/assets",
        components: "@/components",
      },
    },
  },
  //vue-cli-plugin-style-resources-loader
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        "/Users/chenic/Desktop/projects/profile/profile/src/assets/scss/_variables.scss",
      ],
    },
  },

  publicPath: process.env.NODE_ENV === "production" ? "/profile/" : "/",
};
