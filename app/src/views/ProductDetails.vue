<template>
  <main class="product-details-page container">
    <h2>
      {{ findProduct.name }}
      <span class="product-rate">
        <i v-for="i in 5" :key="i" :class="[{ filled : findProduct.rate >= i }, 'fas fa-star rate']" />
      </span>
    </h2>
    <section class="product-info container flex">
      <div class="flex column">
        <ul class="tech-specs">
          <h3 class="text-center mb-md">Specs:</h3>
          <li v-for="(value, key) of findProduct.techSpecs" :key="key" class="flex between">
            <span>{{ key }} :</span>
            <span>{{ value }}</span>
          </li>
        </ul>
        <div class="product-img"><img :src="findProduct.image" :alt="findProduct.name" /></div>
      </div>
      
      <ul class="reviews">
        <h3 class="text-center mb-md">Reviews:</h3>
        <li v-for="(review, i) in findProduct.reviews" :key="i">
          <article class="review bordered">
            <section>
              <h4 class="flex between border-bottom p-sm">
                <span>{{ review.name }}</span>
                <span>{{ review.date }}</span>
              </h4>
              <div class="p-sm">
                <i v-for="i in 5" :class="[{ filled: review.rate >= i }, 'fas fa-star rate']" :key="i"></i>
              </div>
            </section>
            <section class="review-text p-sm">{{ review.text }}</section>
          </article>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ProductDetails',
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
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/helpers'

.product-details-page

  h2
    padding-left: 15px
    font-weight: 400
    font-size: 2rem
    margin-bottom: 15px
    color: $color-active

    i
      vertical-align: middle

    .product-rate
      padding-left: 15px

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
      border-color: $color-active

      
</style>