<template>
  <main class="flex pt-lg">
    <ProductFilters />

    <section class="flex wrap between">
      <ProductCard
        v-for="item in products" :key="item.id"
        :id="item.id" :name="item.name" :price="item.price" :discount="item.discount" 
        :available="item.available" :reviews="item.reviews" :rate="item.rate"
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
    ...mapState(["products"])
  },
};
</script>
