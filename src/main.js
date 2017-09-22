import Vue from 'vue'
import App from './App'
import { store } from './store/store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
