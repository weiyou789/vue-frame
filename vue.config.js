module.exports = {
    assetsDir: process.env.NODE_ENV === 'production' ? 'crm_static' : '',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [require('autoprefixer'), require('postcss-px2rem')({
                    remUnit: 75
                })]
            }
        }
    }
}
