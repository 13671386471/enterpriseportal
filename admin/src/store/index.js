import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
export default createStore({
  state: {
    isGetterRouter: false,
    isCollapsed: false,// 菜单是否折叠
  },
  getters: {
  },
  mutations: {
    setGetterRouter(state,val){
      state.isGetterRouter = val;
    },
    changeCollapsed(state){
      state.isCollapsed = !state.isCollapsed;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      // storage: window.sessionStorage,
      // reducer: (state) => {
      //   return {
      //     isCollapsed: state.isCollapsed
      //   }
      // }
      paths: ['isCollapsed']// 指定哪些状态需要持久化
    })
  ]
})
