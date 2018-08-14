const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port:8091
  },
  baseUrl: process.env.NODE_ENV === 'production'
  ? '/'
  : '/',
  chainWebpack: (config)=>{
    
  },
  configureWebpack: config => {
    Object.assign(config, { // 开发生产共同配置
      resolve: {
        alias: {
          '@': resolve('src/'),
          'assets':resolve('src/assets'),
          'src':resolve('src'),
        }
      },
      performance:false//取消限制大小的warning    
    })
  }
}