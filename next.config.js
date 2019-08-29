module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  }
}
