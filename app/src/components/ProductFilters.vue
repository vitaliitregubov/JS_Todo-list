<template>
  <aside class="filters border-top border-right">
    <section class="filter-group price-filter border-bottom">
      <h4>{{ $t('home.priceMax') }}:</h4>
      <div class="flex between">
        <input
          type="range" @change="filter" v-model.lazy="filters.priceMax"
          min="200" max="5000" step="100" class="price-range"
        />
        <input
          type="number" @change="filter" v-model.lazy="filters.priceMax"
          controls="off" class="price-input" title="max price"
        />
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        priceMax: null
      }
    }
  },
  methods: {
    filter() {
      const filteredProducts = this.$store.state.products.filter(item => {
        return Number(item.price) <= Number(this.filters.priceMax)
      })
      this.$store.commit('filterProducts', filteredProducts)
    }
  },
  created() {
    this.filters.priceMax = this.$store.state.filteredProducts.reduce((acc, item) => {
      if (Number(item.price) > acc) acc = Number(item.price)
      return acc
    }, 0)
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/helpers'

.filters
  width: 220px

  .ram-option-wrapper
    margin-bottom: 8px

  .ram-filter
    input
      display: none

    label
      margin-bottom: 14px
      padding-left: 30px

      &::before,
      &::after
        @include pseudoEl
        left: 0
        bottom: 0
        width: 16px 
        height: 16px
        border-radius: 4px
        background-color: #dbe0e3

      &::after
        display: none
        border-radius: 0
        left: 3px
        bottom: 6px
        width: 8px
        height: 4px
        background-color: transparent
        border: 3px solid #fff
        transform: rotate(-45deg)
        border-top: none
        border-right: none


    input:checked + label

      &::before
        background-color: $color-green

      &::after
        display: block

  .filter-group
    padding: 30px 20px

    .price-range
      width: 100px
      cursor: pointer

    .price-input
      width: 60px
      text-align: center
      height: 40px
      font-size: 1.2rem

    h4
      font-weight: 400
      font-size: 1.6rem
      margin-bottom: 10px
</style>