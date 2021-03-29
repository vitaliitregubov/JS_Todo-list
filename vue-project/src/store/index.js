import { createStore } from 'vuex'

export default createStore({
  state: {
    authenticated: false,
    links: [
      {
        id: 0,
        title: 'Project Vue.js',
        description: 'SPA'
      },
      {
        id: 1,
        title: 'Project Node.js',
        description: 'Server side technology'
      },
      {
        id: 2,
        title: 'Project Nuxt.js',
        description: 'Server side rendering'
      },
    ],
    loginData: {
      login: "",
      password: ""
    },
  },
  mutations: {
    resetLoginForm(state) {
      state.loginData.login = state.loginData.password = ""
    },

    confirmAuthorization(state) {
      state.authenticated = true
    }
  },
  actions: {
   
  },
  getters: {
    loginDataGetter(state) {
      return state.loginData
    }
  },
  modules: {
  }
})
