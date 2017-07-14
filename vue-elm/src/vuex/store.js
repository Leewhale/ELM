import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 页面要用到的数据
const state = {
    total: [0, 0], //总价&总数量
    cartList: [] //购物车商品列表
}

// 操作state里面的数据
const mutations = {
    // 添加商品
    addCartList: function(state, item) {
        var _item = state.cartList.find(i => i.item_id === item.item_id);
        if (_item) {
            _item.number++;
        } else {
            item.number = 1;
            item.vshow = true;
            state.cartList.push(item);
        }
    },
    // 减少商品
    reduceCartList: function(state, item) {
        if (item.number > 1) {
            item.number--;
        } else if (item.number == 1) {
            item.number -= 1;
            item.vshow = false;
            state.cartList.splice(state.cartList.indexOf(item), 1);
        }
    },
    // 清空商品
    delAll: function() {
        state.cartList = [];
    }
}

// 调用mutations里面的方法
const actions = {
    // +
    addCartList: function(context, item) {
        context.commit('addCartList', item);
    },
    // -
    reduceCartList: function({ commit }, item) {
        commit('reduceCartList', item);
    },
    // 清空
    delAll: function({ commit }) {
        commit('delAll');
    }
}

// 计算属性
const getters = {
    // 返回购物车列表
    getCartList: function() {
        return state.cartList;
    }

    // 计算总价和总数量
    // getTotal: function() {
    //     state.total = [0, 0];
    //     state.cartList.forEach(i => {
    //         state.total[0] += i.number;
    //         state.total[1] += i.number * i.specfoods[0].price;
    //     });
    //     return state.total;
    // }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});