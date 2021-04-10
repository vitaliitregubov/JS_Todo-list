<template>
  <Header />
  <BreadCrumbs />
  <AuthModal />

  <router-view />
</template>

<script>
import AuthModal from "@/views/AuthModal";
import BreadCrumbs from '@/components/BreadCrumbs'
import Header from "@/components/Header";
import products from "@/includes/products";

export default {
  name: 'App',
  components: {
    AuthModal,
    Header,
    BreadCrumbs
  },
  created() {
    this.$store.dispatch('initLogin')
    this.$store.commit('loadProducts', products)
  },
};
</script>

