import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    baseInfo: {
        name: '六里屯街道十里堡北里小区',
        latitude: 40.08156,
        longitude: 116.39172
    }
}

const mutations = {
    setBaseInfo(state, obj){
        state.baseInfo = obj;
    }

}

const actions = {
    setBaseInfo( {commit}, obj){
        commit('setBaseInfo', obj);
    }
}

const getters = {
    getBaseInfo(){
        return state.baseInfo;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})