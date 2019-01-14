// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import Vuex from 'vuex'
//
import '../node_modules/iview/dist/iview.min.js';
import "../node_modules/iview/dist/styles/iview.css"
import VueLazyload from "vue-lazyload"

Vue.use(VueLazyload)
Vue.use(Vuex)
Vue.use(iView)
// Vue.use(iView, {
//   i18n: function(path, options) {
//     let value = i18n.t(path, options)
//     if (value !== null && value !== undefined) {
//       return value
//     }
//     return ''
//   }
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h){
    return h(App)
  }
})

