module.exports = {
    outputDir: 'docs',
    publicPath: '/my_page',
    configureWebpack: {
        optimization: {
            splitChunks: false
        }
    },
    css: {
        extract: false,
    }
}