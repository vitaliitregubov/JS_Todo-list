<template>
  <article class="product-item bordered">
    <div class="hovered-block">
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
          <span class="reviews"> {{ reviews.length }} {{ $t('home.reviews')}}</span>
        </router-link>
      </div>

      <div class="product-price flex between">
        <span v-if="discount" class="initial-price">${{ priceInitial(price, discount) }}</span>
        <span :class="{ discounted : discount }">{{ `$${price}` }}</span>
        <OrderProductBtn :id="id" />
      </div>

      <p class="features">{{ features }}</p>
    </div>

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
        <span class="reviews"> {{ reviews.length }} {{ $t('home.reviews')}}</span>
      </router-link>
    </div>

    <div class="product-price flex between">
      <span v-if="discount" class="initial-price">${{ priceInitial(price, discount) }}</span>
      <span :class="{ discounted : discount }">{{ `$${price}` }}</span>
      <OrderProductBtn :id="id" />
    </div>
  </article>
</template>

<script>
import OrderProductBtn from '@/components/OrderProductBtn'

export default {
  components: {
    OrderProductBtn
  },
  props: [ 'id', 'features', 'name', 'price', 'discount', 'available', 'reviews', 'rate', 'image' ],
  methods: {
    priceInitial(price, discount) {
      return parseInt(Number(price) / (1 - parseFloat(discount) / 100));
    },
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/helpers'

.product-item
  position: relative
  width: 240px
  height: 340px
  padding: 10px

  .item-discount
    position: absolute
    right: 20px
    top: 10px
    background: #eb2226
    color: yellow
    height: 20px
    width: 80px
    text-align: center

  .hovered-block
    display: none
    position: absolute
    z-index: 10
    background-color: #fff
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)
    top: 0
    left: -5px
    width: 250px
    height: 500px
    padding: 10px

    .item-discount
      right: 25px

    .features
      font-size: 0.8rem
      margin-top: 0.6rem

  &:hover
    .hovered-block
      display: block

  .product-link
    &:hover .product-name
      color: #1769ff
      text-decoration: underline

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
    margin-top: 1.6rem

    .discounted
      color: $color-active

    .initial-price
      position: absolute
      opacity: 0.6
      font-size: 1rem
      top: -20px
      text-decoration: line-through
</style>