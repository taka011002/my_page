module.exports = {
    outputDir: 'docs',
    publicPath: '/',
    configureWebpack: {
        optimization: {
            splitChunks: false
        }
    },
    css: {
        extract: false,
    }
}