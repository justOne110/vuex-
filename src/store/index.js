import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

// user模块
let user = {
  namespaced:true,
  state:{
    bread:"啦啦啦"
  },
  mutations:{
    setBread(state,data){
      state.bread = data
    }
  },
  actions:{},
  getters:{}
}
export default new Vuex.Store({
  state: {
    aaa:"1234",
    sum:11
  },
  mutations: {
    // 同步修改state中的数据
    setData(state,data){
      state.aaa = data
    }
  },
  actions: {
    // 异步修改state中的数据
    // 1. 通过commit 调用mutations中的方法，通过
    // mutations来修改state中的方法
    set({commit},val){
      setTimeout(()=>{
        commit('setData',val)
      },1000)
    }
  },
  getters:{
    newSum : state=>state.sum*6
  },
  modules: {
    user
  },
  plugins: [createPersistedState({
    storage:sessionStorage,
    key:"vuexxx"
})],
})
