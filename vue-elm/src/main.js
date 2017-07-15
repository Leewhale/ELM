// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'
// 引入vuex
import store from './vuex/store'
// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload);
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'assets/logo.png',
    loading: 'assets/loading.gif',
    attempt: 1,
    // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
    listenEvents: ['scroll']
});


// 引入http请求
import axios from 'axios'
Vue.prototype.$http = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})