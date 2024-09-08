import { createStore } from 'vuex'

export default createStore({
  state: {

    isGetterRouter: false
  },
  getters: {
  },
  mutations: {
    setGetterRouter(state,val){
      state.isGetterRouter = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
