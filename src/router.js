import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home')
const About = () => import(/* webpackChunkName: "about" */ './views/About')

const Demo01 = () => import(/* webpackChunkName: "Demo01" */ './views/demo/demo01')
const Demo02 = () => import(/* webpackChunkName: "Demo02" */ './views/demo/demo02')
const Demo03 = () => import(/* webpackChunkName: "Demo03" */ './views/demo/demo03')

Vue.use(Router)

export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/demo01',
            name: 'demo01',
            component: Demo01
        },
        {
            path: '/demo02',
            name: 'demo02',
            component: Demo02
        },
        {
            path: '/demo03',
            name: 'demo03',
            component: Demo03
        }
    ]
})
