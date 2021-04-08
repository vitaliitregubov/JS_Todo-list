<template>
  <main class="container">
    <h2>Cart</h2>
    <div v-if="!$store.state.chosenProducts.length" class="empty-cart">
      <h3>Your cart is empty.</h3>
      <router-link :to="{ name: 'Home' }" class="link-to-home-page border-rounded">Add products</router-link>
    </div>
    <ul class="cart-list">
      <li v-for="item in $store.state.chosenProducts" :key="item.id" class="added-product">
        <router-link :to="{ name: 'ProductDetails', params: { id: item.id } }" class="product-link" :title="item.name">
          {{ item.name }}
        </router-link>
        <div class="product-controls">
          <div class="change-quantity">
            <button @click.prevent="decreaseProductQuantity(item.id)" class="change-quantity-btn">
              -
            </button>
            <span class="product-quantity">{{ item.quantity || 1 }}</span>
            <button @click.prevent="increaseProductQuantity(item.id)" class="change-quantity-btn">
              +
            </button>
          </div>
          <span class="product-price">{{ Number(item.quantity) * Number(item.price) }}</span>
          <button @click.prevent="removeProduct(item.id)" class="remove-btn">Remove</button>
        </div>
      </li>
    </ul>

    <div v-if="$store.state.chosenProducts.length" class="checkout">
      <h3 class="total-sum"><span>Total: </span>{{ totalSum }}</h3>
      <button class="checkout-btn border-rounded">Check out</button>
    </div>
  </main>
</template>

<script>
import { mapMutations } from "vuex";

export default {
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
    },
  },
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
          border-radius: 50%
          border: 2px solid 
          background: transparent
          font-size: 1.1rem
          color: inherit

        .product-quantity
          display: inline-block
          width: 30px
          text-align: center

      .remove-btn
        background-color: $color-active
        color: #fff
        padding: 0 10px

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
      font-weight: 100

  .checkout-btn
    margin: 30px auto
    background: $color-accent
    padding: 10px 30px
    font-size: 1.4rem
    color: #fff


</style>