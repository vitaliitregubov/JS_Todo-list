<template>
  <main class="flex pt-lg">
    <ProductFilters />

    <section class="products-container">
      <article
        :class="[{ 'unavailable': !available }, 'product-item', 'secondary-bg']"
        v-for="{ id, name, price, discount, available } in allProducts"
        :key="id"
        :title="name"
      >
        <router-link
          :to="{ name: 'ProductDetails', params: { id } }"
          class="product-link"
        >
          <div class="product-img"></div>

          <h4 class="text-overflow">{{ name }}</h4>
        </router-link>

        <div v-if="discount" class="item-discount border-rounded">{{ `-${discount}` }}</div>

        <div class="product-price">
          <template v-if="discount">
            <span class="full-price">{{ priceInitial(price, discount) }}</span>
            <span class="discounted-price">{{ `$${price}` }}</span>
          </template>
          <span v-else>{{ `$${price}` }}</span>
        </div>

        <template v-if="available">
          <button
            v-if="getProduct(id)"
            @click.prevent="removeProduct(id)"
            class="order-btn remove"
          >
            Remove from Cart
          </button>
          <button v-else @click.prevent="addToCart(id)" class="order-btn">
            Add to Cart
          </button>
        </template>
        <div v-else class="product-unavailable-msg">Unavailable</div>
      </article>
    </section>
  </main>
</template>

<script>
import { mapState, mapMutations } from "vuex"
import ProductFilters from '@/components/ProductFilters'

export default {
  name: "Home",
  components: {
    ProductFilters
  },
  methods: {
    ...mapMutations(["addProduct", "removeProduct"]),
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
  },
  computed: {
    ...mapState(["products"]),
    allProducts() {
      return this.products;
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../sass/helpers'

.products-container
  display: flex
  justify-content: space-evenly
  flex-wrap: wrap
  padding: 0 15px

  .product-item
    position: relative
    display: flex
    flex-direction: column
    justify-content: space-between
    margin: 20px
    width: 240px
    height: 300px
    padding: 10px
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3)
    background-color: #f6f6f5

    &.unavailable
      opacity: 0.7

      .product-unavailable-msg
        height: 40px
        line-height: 40px
        text-align: center
        font-size: 1.4rem
        color: #e04646

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
      height: 160px
      background-color: lightgrey

    .product-name
      font-size: 1.4rem
      font-weight: 400

    .product-price
      text-align: right
      color: golden
      font-size: 2rem

      .full-price
        position: relative
        font-size: 1.2rem
        margin-right: 10px

        &::before
          @include pseudoEl
          top: 11px
          left: 0
          width: 100%
          height: 2px
          background-color: red
          transform: rotate(15deg)

    .order-btn
      height: 40px
      width: 100%
      font-size: 1.4rem
      background-color: #34bf49

      &.remove
        background-color: $color-active

// body[data-mode="dark"]
//   .product-item
//     background-color: #333
</style>
