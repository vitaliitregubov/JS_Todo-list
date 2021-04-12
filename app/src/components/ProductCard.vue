<template>
  <article class="product-item bordered">
    <router-link
      :to="{ name: 'ProductDetails', params: { id } }"
      class="product-link"
    >
      <div class="product-img flex center">
        <img :src="image" :alt="name">
      </div>
      <h4 class="product-title text-overflow">{{ name }}</h4>
    </router-link>

    <div v-if="discount" class="item-discount border-rounded">{{ `-${discount}` }}</div>

    <div class="product-rate-reviews">
      <router-link class="rate" :to="{ name: 'Cart' }">
        <i v-for="i in 5" :key="i" :class="[{ filled: Number(rate) >= i }, 'fas fa-star rate']"></i>
        <span class="reviews"> {{ reviews.length }} reviews</span>
      </router-link>
    </div>

    <div class="product-price flex between">
      <span v-if="discount" class="initial-price">${{ priceInitial(price, discount) }}</span>
      <span :class="{ discounted : discount }">{{ `$${price}` }}</span>
      <button v-if="!getProduct(id)" @click.prevent="addToCart(id)" class="order-btn" title="add to cart">
        <i class="fal fa-shopping-cart"></i>
      </button>
      <router-link v-else :to="{ name: 'Cart' }" class="order-btn cart-link">
        <i class="fal fa-shopping-cart"></i>
      </router-link>
    </div>
  </article>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: [ 'id', 'name', 'price', 'discount', 'available', 'reviews', 'rate', 'image' ],
  methods: {
    ...mapMutations(["addProduct"]),
    priceInitial(price, discount) {
      return parseInt(Number(price) / (1 - parseFloat(discount) / 100));
    },
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

.product-item
  position: relative
  display: flex
  flex-direction: column
  justify-content: space-between
  width: 240px
  height: 340px
  padding: 10px

  .product-link
    &:hover .product-name
      color: #1769ff
      text-decoration: underline

  .item-discount
    position: absolute
    right: 0
    top: 0
    background: #eb2226
    color: yellow
    height: 20px
    width: 80px
    text-align: center

  .product-img
    height: 200px

    img
      width: auto
      height: auto
      max-height: 100%
      max-width: 100%
      background-color: inherit

  .product-title
    margin-top: 10px
    margin-bottom: 5px
    font-size: 1.1rem
    line-height: 1.1rem
    font-weight: 400

  .product-rate-reviews
    font-size: .8rem
    height: 20px
    margin-bottom: auto

    &:hover
      .reviews
        text-decoration: underline

    .reviews
      padding-left: 10px
      color: $color-active  
      vertical-align: bottom


  .product-price
    position: relative
    align-items: baseline
    font-size: 1.6rem

    .discounted
      color: $color-active

    .initial-price
      position: absolute
      opacity: 0.6
      font-size: 1rem
      top: -20px
      text-decoration: line-through

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