import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Element from '@jd/element-ui'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
