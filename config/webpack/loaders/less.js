const getStyleRule = require('@rails/webpacker/package/utils/get_style_rule')

const overides = { '@primary-color': '#F00' }


module.exports = getStyleRule(/\.less$/i, false, [
  {
    loader: 'less-loader',
    options: {
      sourceMap: true,
      lessOptions: {
        javascriptEnabled: true,
        // modifyVars: overides,
      }
    }
  }
])