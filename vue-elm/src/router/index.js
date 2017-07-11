import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Find from '@/pages/Find'
import Order from '@/pages/Order'
import Mine from '@/pages/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },{
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/find',
      name: 'Find',
      component: Find
    },{
      path: '/order',
      name: 'Order',
      component: Order
    },{
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
