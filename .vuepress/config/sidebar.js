// const { generateWebpack } = require('./utils')
// const webpack4 = generateWebpack()
// console.log('webpack4', webpack4)

const webpack4 = [
  {
    title: 'webpack4',
    collapsable: false,
    children: [
      '0：前言.md',
      '1：搭建项目并打包 JS 文件.md',
      '2：生产和开发模式.md',
      '3：覆盖默认 entry、output.md',
      '4：用 Babel7 转译 ES6.md',
      '5：Code Splitting.md',
      '6：Lazy Loading、Prefetching.md',
      '7：自动生成 HTML 文件.md',
      '8：处理 CSS、SCSS 文件.md',
      '9：JS Tree Shaking.md',
      '10：CSS Tree Shaking.md',
      '11：图片处理汇总.md',
      '12：字体文件处理.md',
      '13：处理第三方 JS 库.md',
      '14：开发模式与 webpack-dev-server.md',
      '15：开发模式和生产模式・实战.md',
      '16：打包自定义函数库.md',
      '17：PWA 配置.md',
      '18：TypeScript 配置.md',
      '19：Eslint 配置.md',
      '20：使用 DLLPlugin 加快打包速度.md',
      '21：多页面打包配置.md',
      '22：编写 loader.md',
      '23：编写 plugin.md',
      '24：编写 Bundle.md'
    ]
  }
]

module.exports = {
  '/webpack4/': webpack4
}