import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/Home'
// import Find from '@/pages/Find'
// import Order from '@/pages/Order'
// import Mine from '@/pages/Mine'
// import SearchAdd from '@/pages/SearchAdd'

// 路由懒加载
const Home = resolve => require(['@/pages/Home'], resolve)
const Find = resolve => require(['@/pages/Find'], resolve)
const Order = resolve => require(['@/pages/Order'], resolve)
const Mine = resolve => require(['@/pages/Mine'], resolve)
const SearchAdd = resolve => require(['@/pages/SearchAdd'], resolve)
const SearchShop = resolve => require(['@/pages/SearchShop'], resolve)
const ShopSort = resolve => require(['@/pages/ShopSort'], resolve)
const Jifen = resolve => require(['@/pages/Jifen'], resolve)
const ShopDetail = resolve => require(['@/pages/ShopDetail'], resolve)
const Msrt = resolve => require(['@/pages/find/MeiShiReTui'], resolve)
const Tttj = resolve => require(['@/pages/find/TianTianTeJia'], resolve)
const Login = resolve => require(['@/pages/login/Login'], resolve)
const Regist = resolve => require(['@/pages/login/Register'], resolve)



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
    },{
      path: '/address',
      name: 'SearchAdd',
      component: SearchAdd
    },{
      path: '/searchShop',
      name: 'SearchShop',
      component: SearchShop
    },{
      path: '/shopSort',
      name: 'ShopSort',
      component: ShopSort
    },{
      path: '/jifen',
      name: 'Jifen',
      component: Jifen
    },{
      path: '/shopDetail',
      name: 'ShopDetail',
      component: ShopDetail,
       children: [{
        path: 'shangjiaxinxiShop',
        meta: {
            // footerShow: false,
            title: '商家信息'
        },
            component: require('../components/shangjiaxinxi_shop')
        }, {
            path: 'shangjiaxinxi_pingjia',
            component: require('../components/shangjiaxinxi_pingjia')
        }]
    },{
      path: '/msrt',
      name: 'Msrt',
      component: Msrt
    },{
      path: '/tttj',
      name: 'Tttj',
      component: Tttj
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/regist',
      name: 'Regist',
      component: Regist
    }
  ]
})
