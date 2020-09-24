module.exports = {
    assetsDir: process.env.NODE_ENV === 'production' ? 'crm_static' : '',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [require('autoprefixer'), require('postcss-plugin-px2rem')({
                    remUnit: 75,
                    propList: ["*"],
                    selectorBlackList: ['html', 'mint-', 'van-', 'mpvue-', 'calendar', 'iconfont'],
                    propBlackList: ['border']
                })]
            }
        }
    }
}
