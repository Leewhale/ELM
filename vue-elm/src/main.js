// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './vuex/store'
// 使用mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
    preLoad: 3,
    error: './assets/logo.png',
    loading: './assets/logo.png',
    attempt: 1
})
Vue.prototype.$http = axios
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})