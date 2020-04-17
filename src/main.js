import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import attachFastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false

Vue.use(Vant)

attachFastClick(document.body)

Vue.use(VueLazyload, {
  error: './assets/img/error.jpg',
  loading: './assets/img/loading.gif'
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
