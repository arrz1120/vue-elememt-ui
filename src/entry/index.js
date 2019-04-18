import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '../js/lib/common.js'
import App from '../index.vue'

// window.urlPrefix=__DEV__?'开发':'生产'
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render:(h=>h(App))
})
