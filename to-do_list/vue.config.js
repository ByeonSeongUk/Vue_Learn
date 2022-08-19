const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 단일 이름 방지 off
  lintOnSave:false
})
