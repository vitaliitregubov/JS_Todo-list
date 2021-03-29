// import { registerRuntimeCompiler } from '@vue/runtime-core';
import { createStore } from 'vuex'
import { auth, usersCollection } from '@/includes/firebase';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn
      alert(state.userLoggedIn)
    },
    async logOut(state) {
      await auth.signOut();
      state.userLoggedIn = false
    }
  },
  actions: {
    async register({ commit }, { email, password, name }) {
      const userCred = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await usersCollection.doc(userCred.user.uid).set({
        name,
        email,
        password
      });

      await userCred.user.updateProfile({
        displayName: name
      });

      commit('toggleAuth', { name, email, password });
    },
    initLogin({ commit }) {
      const user = auth.currentUser // null - if a user is not logged in

      if(user) {
        commit('toggleAuth')
      }
    },
    async login({ commit }, { email, password }) {
      await auth.signInWithEmailAndPassword(email, password)
      commit('toggleAuth')
    }
  },
  getters: {
    authModalShow: (state) => state.authModalShow  ? 'block' : 'none',
  },
  modules: {
  }
})
