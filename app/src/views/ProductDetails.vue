<template>
  <main>
    <BreadCrumbs />

    <section class="container">
      <h2 class="flex">
        {{ findProduct.name }}
        <span class="product-rate">
          <i v-for="i in 5" :key="i" :class="[{ filled : findProduct.rate >= i }, 'fas fa-star rate']" />
        </span>
        <span>{{ findProduct.price }}</span>
        <OrderProductBtn :id="findProduct.id" />
      </h2>

      <div class="product-info container flex">
        <div class="flex column">
          <ul class="tech-specs">
            <h3 class="text-center mb-md">{{ $t('productDetails.techSpecs') }}</h3>
            <li v-for="(value, key) of findProduct.techSpecs" :key="key" class="flex between">
              <span>{{ key }} :</span>
              <span>{{ value }}</span>
            </li>
          </ul>
          <div class="product-img"><img :src="findProduct.image" :alt="findProduct.name" /></div>
        </div>
        
        <ul class="reviews">
          <h3 class="text-center mb-md">{{ $t('productDetails.reviews') }}</h3>
          <li v-for="(review, i) in findProduct.reviews" :key="i">
            <article class="review bordered">
              <section>
                <h4 class="flex between border-bottom p-sm">
                  <span>{{ review.name }}</span>
                  <span class="review-date">{{ review.date }}</span>
                </h4>
                <div class="p-sm">
                  <i v-for="i in 5" :class="[{ filled: review.rate >= i }, 'fas fa-star rate']" :key="i"></i>
                </div>
              </section>
              <section class="review-text p-sm">{{ review.text }}</section>
            </article>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import OrderProductBtn from '@/components/OrderProductBtn'
import BreadCrumbs from '@/components/BreadCrumbs'

export default {
  name: 'ProductDetails',
  components: {
    OrderProductBtn,
    BreadCrumbs
  },
  data() {
    return {
      img: '',
    }
  },
  computed: {
    findProduct() {
      return this.$store.state.products.find(item => Number(item.id) === Number(this.$route.params.id))
    }
  },
  created() {
    this.img = this.findProduct.image
  },
  methods: {
    getProduct(id) {
      return this.$store.state.chosenProducts.find(
        (item) => Number(item.id) === Number(id)
      );
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/helpers'
h2
  padding-left: 15px
  font-weight: 400
  font-size: 2rem
  margin-bottom: 15px
  color: $color-active

  i
    vertical-align: middle

  a,
  button
    margin-left: auto

  .product-rate
    padding-left: 15px
    margin-right: auto

.tech-specs
  li
    width: 300px

.product-img
  width: 300px
  margin-top: 20px

  img
    width: 300px
    height: auto

.reviews
  flex-grow: 1
  padding-left: 40px

  .review
    margin-bottom: 20px

    .review-date
      font-weight: 400
      font-size: 0.8rem
      letter-spacing: 2px
</style>