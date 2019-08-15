import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import axios from 'axios'

// 使Mock生效
import './mock/'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  render: h => h(App)
}).$mount('#app')
