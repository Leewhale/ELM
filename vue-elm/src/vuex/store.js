import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    baseInfo: {
        name: '六里屯街道十里堡北里小区',
        latitude: 40.08156,
        longitude: 116.39172
    },
    total: [0, 0], //总价&总数量
    cartList: [], //购物车商品列表
    userInfo: {}
}

const mutations = {
    setBaseInfo(state, obj){
        state.baseInfo = obj;
    },
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
    },

    // 注册新用户
    setUserInfo(state, info){
        state.userInfo[info.tel] = info;
    },
    checkUser(state, info){
        if(state.userInfo[info.tel]===undefined){
            return true;
            console.log('true')
        }else{
            return false;
             console.log('false')
        }
    }

}

const actions = {
    setBaseInfo( {commit}, obj){
        commit('setBaseInfo', obj);
    },
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
    },
    // 用户名密码
    setUserInfo({commit}, info){
        commit('setUserInfo', info);
    },
    checkUser({commit}, info){
        commit('checkUser', info);
    }
}

const getters = {
    getBaseInfo(){
        return state.baseInfo;
    },
    // 返回购物车列表
    getCartList() {
        return state.cartList;
    },
    // 获取用户名密码信息
    getUserInfo() {
        return state.userInfo;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})