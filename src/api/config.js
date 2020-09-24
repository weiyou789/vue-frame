// 配置变量
let url = ''
let dfxUrl = ''
let b2bUrl = ''
let hbpUrl = ''
let phoneModelUrl = ''
let ccpUrl = ''
var env = process.env.NODE_ENV === 'development' ? 'development' : process.env.VUE_APP_TITLE === 'devtest' ? 'devtest' : process.env.VUE_APP_TITLE === 'test' ? 'test' : process.env.VUE_APP_TITLE === 'preview' ? 'preview' : 'production'
switch (env) {
    case 'development':
        /*url = 'https://b2b-gateway-dev.hosjoy.com:4832/'
        dfxUrl = 'http://192.168.20.248:8089/api/'
        b2bUrl = 'http://192.168.20.248:40000'
        ccpUrl = 'http://192.168.20.248:8021'
        hbpUrl = 'http://192.168.20.248:30000' // 埋点
        phoneModelUrl = 'http://172.16.182.69:8080/newshareh5'*/
        url = 'https://hbp-test245.hosjoy.com/tms'
        dfxUrl = 'https://route-test245.hosjoy.com/'
        b2bUrl = 'https://b2b-gateway-test245.hosjoy.com'
        ccpUrl = 'https://ccp-test245.hosjoy.com'
        hbpUrl = 'https://hbp-test245.hosjoy.com'
        phoneModelUrl = 'https://staticdfx-test245.hosjoy.com/newshareh5'
        break
    case 'devtest':
        url = 'https://b2b-gateway-dev.hosjoy.com:4832/'
        dfxUrl = 'http://192.168.20.248:8089/api/'
        b2bUrl = 'http://192.168.20.248:40000'
        ccpUrl = 'http://192.168.20.248:8021'
        // b2bUrl = 'https://testb2b-gateway.hosjoy.com:4832'
        hbpUrl = 'http://192.168.20.248:30000' // 埋点
        phoneModelUrl = 'http://192.168.20.108:8080/newshareh5'
        break
    case 'test':
        url = 'https://hbp-test245.hosjoy.com/tms'
        dfxUrl = 'https://route-test245.hosjoy.com/'
        b2bUrl = 'https://b2b-gateway-test245.hosjoy.com'
        ccpUrl = 'https://ccp-test245.hosjoy.com'
        hbpUrl = 'https://hbp-test245.hosjoy.com'
        phoneModelUrl = 'https://staticdfx-test245.hosjoy.com/newshareh5'
        break
    case 'preview':
        url = 'https://staging-hbp.hosjoy.com/tms'
        dfxUrl = 'https://staging-route.hosjoy.com/api/'
        b2bUrl = 'https://staging-b2b-gateway.hosjoy.com'
        ccpUrl = 'https://staging-ccp.hosjoy.com' // 新省市区接口
        hbpUrl = 'https://staging-hbp.hosjoy.com'
        phoneModelUrl = 'https://staging-staticdfx.hosjoy.com/newshareh5'
        break
    case 'production':
        url = 'https://hbp.hosjoy.com/tms'
        dfxUrl = 'https://route.hosjoy.com/api/'
        b2bUrl = 'https://b2b-gateway.hosjoy.com'
        ccpUrl = 'https://ccp.hosjoy.com' // 新省市区接口
        hbpUrl = 'https://hbp.hosjoy.com'
        phoneModelUrl = 'https://staticdfx.hosjoy.com/newshareh5'
        break
}
export const b2bUrls = b2bUrl
export const interfaceUrl = url
export const baseUrl = dfxUrl
export const buryPointUrl = hbpUrl
export const phoneUrl = phoneModelUrl
export const provideUrl = ccpUrl
