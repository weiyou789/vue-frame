

const config = {
    assetsDir: process.env.NODE_ENV === 'production' ? 'static' : '',
}

if(process.env.VUE_APP_TERMINAL==='H5'){
    Object.assign(config,{
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
    })
}

module.exports = config