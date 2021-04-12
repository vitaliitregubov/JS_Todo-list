<template>
  <main>
    <BreadCrumbs />

    <section class="container">
      <h2>{{ $t('cart.cartHeading') }}</h2>
      <div v-if="!$store.state.chosenProducts.length" class="empty-cart">
        <h3>{{ $t('cart.emptyCart') }}</h3>
        <router-link :to="{ name: 'Home' }" class="link-to-home-page border-rounded">{{ $t('cart.addProducts') }}</router-link>
      </div>
      <ul class="cart-list">
        <li v-for="item in $store.state.chosenProducts" :key="item.id" class="added-product">
          <router-link :to="{ name: 'ProductDetails', params: { id: item.id } }" class="product-link" :title="item.name">
            {{ item.name }}
          </router-link>
          <div class="product-controls">
            <div class="change-quantity">
              <button 
                :class="[{ 'disabled-btn' : Number(item.quantity) === 1 }, 'change-quantity-btn']" 
                @click.prevent="decreaseProductQuantity(item.id)" aria-label="decrease quantity"
              >
                <i class="fal fa-minus"></i>
              </button>
              <span class="product-quantity">{{ item.quantity }}</span>
              <button 
                @click.prevent="increaseProductQuantity(item.id)" 
                aria-label="decrease quantity" class="change-quantity-btn"
              >
                <i class="fal fa-plus"></i>
              </button>
            </div>
            <span class="product-price">{{ Number(item.quantity) * Number(item.price) }}</span>
            <button @click.prevent="removeProduct(item.id)" class="action-btn">{{ $t('cart.removeProduct') }}</button>
          </div>
        </li>
      </ul>

      <div v-if="$store.state.chosenProducts.length" class="checkout">
        <h3 class="total-sum"><span>{{ $t('cart.total') }}: </span>{{ totalSum }}</h3>
        <button class="checkout-btn border-rounded">{{ $t('cart.checkOut') }}</button>
      </div>
    </section>
  </main>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs'
import { mapMutations } from "vuex";

export default {
  components: {
    BreadCrumbs
  },
  computed: {
    totalSum() {
      return this.$store.state.chosenProducts.reduce((sum, item) => {
        return sum + Number(item.quantity) * Number(item.price)
      },0)
    },
  },
  methods: {
    ...mapMutations(["increaseProductQuantity", "decreaseProductQuantity"]),
    removeProduct(id) {
      this.$store.commit("removeProduct", id);
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../sass/helpers'

h2
  font-size: 2rem

.empty-cart
  display: flex
  flex-direction: column
  align-items: center

  .link-to-home-page
    margin: 30px 0
    background-color: $color-active
    color: #fff
    padding: 10px 20px
  
.cart-list

  .added-product
    display: flex
    justify-content: space-between
    align-items: center
    padding: 10px
    margin: 20px 0
    border: 1px solid $color-active
    border-left: none
    border-right: none

    .product-link
      display: inline-block
      text-decoration: underline
      color: inherit
      font-size: 1.2rem

      &:hover
        color: #1769ff

    .product-controls
      display: flex

      .product-price
        width: 60px
        height: 30px
        line-height: 30px
        text-align: center
        margin-right: 10px

      .change-quantity
        margin-right: 10px
        display: flex
        align-items: center

        .change-quantity-btn
          height: 30px
          width: 30px
          line-height: 30px
          background: transparent
          color: inherit

          &.disabled-btn
            opacity: 0.2
            outline: none
            cursor: auto

        .product-quantity
          display: inline-block
          width: 30px
          text-align: center

.checkout
  display: flex
  flex-direction: column

  .total-sum
    align-self: flex-end
    font-size: 2rem
    line-height: 3rem
    padding-right: 15px
    font-weight: 400

    span
      font-size: 1.2rem

  .checkout-btn
    margin: 30px auto
    background: $color-accent
    padding: 10px 30px
    font-size: 1.4rem
    color: #fff


</style>