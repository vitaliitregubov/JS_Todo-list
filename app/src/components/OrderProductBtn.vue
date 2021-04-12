<template>
  <router-link v-if="getProduct(id)" :to="{ name: 'Cart' }" class="order-btn cart-link">
    <i class="fal fa-shopping-cart"></i>
  </router-link>
  <button v-else @click.prevent="addToCart(id)" class="order-btn" title="add to cart" aria-label="add to cart">
    <i class="fal fa-shopping-cart"></i>
  </button>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['id'],
  methods: {
    ...mapMutations(["addProduct"]),
    addToCart(id) {
      if (!this.$store.state.userLoggedIn) {
        this.$store.commit("toggleModal");
        return;
      }

      this.addProduct(id);
    },
    getProduct(id) {
      return this.$store.state.chosenProducts.find(
        (item) => Number(item.id) === Number(id)
      );
    },
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/helpers'

.order-btn
  height: 40px
  width: 60px
  text-align: center
  line-height: 40px
  font-size: 1.4rem
  color: $color-green

  i
    font-weight: 300

  &.cart-link
    position: relative

    &::before
      @include pseudoEl
      content: "\f00c"
      height: 16px
      width: 16px
      border-radius: 50%
      top: 2px
      right: 18px
      border: 1px solid #fff
      background-color: $color-green
    
    &::after
      @include pseudoEl
      right: 21px
      top: 6px
      height: 4px
      width: 8px
      border: 3px solid #fff
      border-top: none
      border-right: none
      background-color: transparent
      transform: rotate(-45deg)
</style>