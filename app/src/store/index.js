import { createStore } from 'vuex'
import { auth, usersCollection } from '@/includes/firebase'

export default createStore({
  state: {
    modalShown: false,
    userLoggedIn: false
  },
  mutations: {
    toggleModal: (state) => state.modalShown = !state.modalShown,
    toggleAuth: (state) => state.userLoggedIn = !state.userLoggedIn,
  },
  actions: {
    async register({ commit }, { email, password }) {
      const userCred = await auth.createUserWithEmailAndPassword(email, password)
      await usersCollection.doc(userCred.user.uid).set({ email, password })
      await userCred.user.updateProfile({ displayName: email })
      commit('toggleAuth')
    },
    async login({ commit }, { email, password }) {
      await auth.signInWithEmailAndPassword(email, password)
      commit('toggleAuth')
    },
    initLogin({ commit }) {
      const user = auth.currentUser

      if (user) {
        commit('toggleAuth')
      }
    },
    async logOut({ commit }) {
      await auth.signOut()
      commit('toggleAuth')
    }
  },
  modules: {
  }
})
