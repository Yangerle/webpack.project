## webpack v4.28.2 前端工程化脚手架

1. webpack单独配置:`webpack.config.js`。

2. webpack使用 `webpack-merge` 插件多文件配置：

    `webpack.common.js` (开发环境和生产环境共有配置)；
    
    `webpack.dev.js` (开发环境配置)；
    
    `webpack.prod.js` (生产环境配置)；
    
3. 热更新(HMR)不能和`[chunkhash]`同时使用。

    解决：分离开发环境与生产环境配置文件的output选项。
    
    来源于：[webpack指令npm start出现错误Cannot use [chunkhash] for chunk](https://segmentfault.com/q/1010000011438869/a-1020000011441168)


