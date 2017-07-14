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
    addCartList(state, item) {
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
    reduceCartList(state, item) {
        if (item.number > 1) {
            item.number--;
        } else if (item.number == 1) {
            item.number -= 1;
            item.vshow = false;
            state.cartList.splice(state.cartList.indexOf(item), 1);
        }
    },
    // 清空商品
    delAll() {
        state.cartList = [];
    }
}

// 调用mutations里面的方法
const actions = {
    // +
    addCartList(context, item) {
        context.commit('addCartList', item);
    },
    // -
    reduceCartList({ commit }, item) {
        commit('reduceCartList', item);
    },
    // 清空
    delAll({ commit }) {
        commit('delAll');
    }
}

// 计算属性
const getters = {
    // 返回购物车列表
    getCartList() {
        return state.cartList;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});