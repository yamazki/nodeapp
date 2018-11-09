// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//using buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import "@mdi/font/css/materialdesignicons.css"

Vue.use(Buefy);
window.Vue = Vue;

import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
