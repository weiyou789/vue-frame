import Vue from 'vue'
import Vuex from 'vuex'
import testModule from './modules/test'
import globalModule from './modules/global'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    test:testModule,
    global: globalModule,
  },
  plugins: debug ? [createLogger()] : []
})
