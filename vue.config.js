const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 4200,
    client: {
      webSocketURL: "auto://0.0.0.0/ws",
    },
  },
});
