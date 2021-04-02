import { createStore } from 'vuex'

export default createStore({
  state: {
    modalShown: false,
    userLoggedIn: null
  },
  mutations: {
    toggleModal: (state) => state.modalShown = !state.modalShown,
     
  },
  actions: {
  },
  modules: {
  }
})
