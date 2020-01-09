// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import App from './App'
import {router} from './router'
import store from './store/'
import '@/styles/index.less'
import { isWindowReload } from '@/utils/windows.js'

Vue.prototype.isWindowReload = isWindowReload

Vue.config.productionTip = false
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})