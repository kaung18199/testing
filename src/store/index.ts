import { createStore } from 'vuex'

export default createStore({
  state: {
    token : ''
  },
  getters: {
    storageToken : state => state.token,
  },
  mutations: {
  },
  actions: {
    setToken : ({state},value)=> state.token = value,
  },
  modules: {
  }
})
