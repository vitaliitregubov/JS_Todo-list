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
  components: {
    AuthModal,
    Header,
  },
  created() {
    this.$store.dispatch('initLogin')
    this.$store.commit('loadProducts', products)
  },
};
</script>

