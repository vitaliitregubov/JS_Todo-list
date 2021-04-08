<template>
  <aside class="filters secondary-bg border-right">
    <section class="filter-group price-filter border-bottom">
      <h4>Price max:</h4>
      <div class="flex between">
        <input
          type="range" min="100" max="5000" step="100"
          v-model.lazy="filters.priceMax" class="price-range"
        />
        <input type="number" controls="off" v-model.lazy="filters.priceMax" class="price-input" title="max price"/>
      </div>
    </section>

    <section class="filter-group ram-filter border-bottom">
      <h4>RAM:</h4>
      <div class="flex column">
        <div v-for="item in 5" :key="item" class="ram-option-wrapper">
          <input type="checkbox" :value="item" v-model="filters.ram" :id="`filter-ram-${item}`" />
          <label :for="`filter-ram-${item}`">{{ item }}GB</label>
        </div>
      </div>
    </section>  

    <section class="filter-group cpu-filter border-bottom">
      <h4>CPU:</h4>
    </section>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        priceMax: 5000,
        ram: [1, 2, 3, 4, 5]
      }
    }
  },
  updated() {
    console.log(this.filters.ram)
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/helpers'

.filters
  width: 300px

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
        width: 20px 
        height: 20px
        border-radius: 10px
        background-color: #dbe0e3

      &::after
        display: none
        border-radius: 0
        left: 4px
        bottom: 6px
        width: 10px
        height: 6px
        background-color: transparent
        border: 3px solid #fff
        transform: rotate(-45deg)
        border-top: none
        border-right: none


    input:checked + label
      color: $color-active

      &::before
        background-color: $color-active

      &::after
        display: block

  .filter-group
    padding: 30px 20px
    // border-bottom: 1px solid #dbe0e3

    .price-range
      width: 140px
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