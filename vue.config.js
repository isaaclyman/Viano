const path = require('path');

module.exports = {
  configureWebpack: config => {
    const toMerge = {
      entry: {
        app: './src/demo.js',
        plugin: './src/plugin.js'
      }
    }

    if (process.env.NODE_ENV === 'production') {
      toMerge.output = {
        path: path.resolve(__dirname, './docs'),
        filename: '[name].js',
        publicPath: '/Viano/'
      }
    } else {
      toMerge.output = {
        path: path.resolve(__dirname, './docs'),
        filename: '[name].js'
      }
    }

    return toMerge
  }
}
