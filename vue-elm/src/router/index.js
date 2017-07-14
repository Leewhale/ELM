import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Find from '@/pages/Find'
import Order from '@/pages/Order'
import Mine from '@/pages/Mine'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    }, {
        path: '/find',
        name: 'Find',
        component: Find,
        children: [{
                path: 'FindMain',
                meta: {
                    footerShow: false,
                    title: '发现'
                },
                component: require('../pages/find/FindMain')
            },
            {
                path: 'MeiShiReTui',
                component: require('../pages/find/MeiShiReTui')
            },
            {
                path: 'TianTianTeJia',
                component: require('../pages/find/TianTianTeJia')
            },
            {
                path: 'ShangJiaXinXi',
                component: require('../pages/find/ShangJiaXinXi'),
                children: [{
                    path: 'shangjiaxinxiShop',
                    meta: {
                        // footerShow: false,
                        title: '商家信息'
                    },
                    component: require('../pages/home/shangjiaxinxi_shop')
                }, {
                    path: 'shangjiaxinxi_pingjia',
                    component: require('../pages/home/shangjiaxinxi_pingjia')
                }]
            }
        ]
    }, {
        path: '/order',
        name: 'Order',
        component: Order
    }, {
        path: '/mine',
        name: 'Mine',
        component: Mine
    }]
})