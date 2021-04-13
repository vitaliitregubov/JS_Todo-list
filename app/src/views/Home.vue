<template>
  <main class="flex">
    <ProductFilters />

    <section class="flex wrap between">
      <h2 v-if="!$store.state.filteredProducts.length">{{ $t('home.noProducts') }}</h2>

      <ProductCard
        v-for="item in filteredProducts" :key="item.id"
        :id="item.id" :name="item.name" :price="item.price" :discount="item.discount" 
        :features="item.features" :reviews="item.reviews" :rate="item.rate" :image="item.image"
      />
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex"
import ProductFilters from '@/components/ProductFilters'
import ProductCard from '@/components/ProductCard'

export default {
  name: "Home",
  components: {
    ProductFilters,
    ProductCard
  },
  computed: {
    ...mapState(["filteredProducts"])
  },
};
</script>
