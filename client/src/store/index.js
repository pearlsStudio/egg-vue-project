import Vue from 'vue'
import Vuex from 'vuex'
import errorLog from './modules/errorLog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    errorLog
  }
})
