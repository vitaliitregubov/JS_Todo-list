<template>
  <Header />
  <AuthModal />

  <router-view />
</template>

<script>
import AuthModal from "@/views/AuthModal";
import Header from "@/components/Header";
import products from "@/includes/products";

export default {
  name: 'App',
  components: {
    AuthModal,
    Header
  },
  created() {
    this.$store.dispatch('initLogin')
    this.$store.commit('loadProducts', products)

    fetch('https://api.github.com/users/vitaliitregubov')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  },
};
</script>

