module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  },
  /**
   * @static_路由 实际访问的路由
   * @pages_路由 对应 pages 文件夹的层级结构
   * @description 用于定义 static 路由与 pages 路由的映射
   * @doc https://nextjs.org/docs#static-html-export
   * @param {*} defaultPathMap
   */
  exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' }
    }
  }
}
