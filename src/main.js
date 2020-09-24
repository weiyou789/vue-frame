import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import { Button,Popup,DropdownMenu, DropdownItem } from 'vant'
Vue.use(Button)
Vue.use(Popup)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
