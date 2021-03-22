import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    isLoaded: false,
    color: "white"
  },
  mutations: {
    loadUserInfo(state, value) {
      state.user = value
      state.isLoaded = true
    },
    setColor(state, value) {
      state.color = value
    }
  },
  actions: {
    loadUserInfo({ commit }) {
      fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => commit('loadUserInfo', data.results[0]))
        .catch(error => console.log(error))
    },
    setColor({ commit }, value) {
      commit('setColor', value)
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  },
  modules: {
  }
})
