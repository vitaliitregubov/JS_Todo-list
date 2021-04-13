import { createStore } from 'vuex'
import { auth, usersCollection } from '@/includes/firebase'

export default createStore({
  state: {
    products: [],
    filteredProducts: [],
    chosenProducts: [],
    modalShown: false,
    userLoggedIn: false
  },
  mutations: {
    loadProducts: (state, payload) => {
      state.products = payload
      state.filteredProducts = payload
    },
    filterProducts: (state, filteredArray) => state.filteredProducts = filteredArray,
    clearCart: (state) => state.chosenProducts = [],
    toggleModal: (state) => state.modalShown = !state.modalShown,
    toggleAuth: (state) => state.userLoggedIn = !state.userLoggedIn,
    addProduct: (state, id) => {
      const product = state.products.find(item => Number(item.id) === Number(id))
      product.quantity = 1
      state.chosenProducts.push(product)
    },
    decreaseProductQuantity: (state, id) => {
      const product = state.chosenProducts.find(item => Number(item.id) === Number(id))
      product.quantity = Number(product.quantity) === 1 ? 1 : product.quantity - 1
    },
    increaseProductQuantity: (state, id) => {
      const product = state.chosenProducts.find(item => Number(item.id) === Number(id))
      product.quantity += 1
    },
    removeProduct: (state, id) => state.chosenProducts =
      state.chosenProducts.filter(item => Number(item.id) !== Number(id)),
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
  getters: {
    getProduct: (state, id) => state.chosenProducts.find(item => Number(item.id) === Number(id))
  }
})

