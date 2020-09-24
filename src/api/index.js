import { request,requestWithoutLoading } from './axios'
import { provideUrl } from './config'

export const getTestData = (params) => {
    return request.get(provideUrl + '/common/region/provinces/nesting', { params })
    // return {name:'我是数据'}
}