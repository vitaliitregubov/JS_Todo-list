<template>
  <main class="product-details-page container">
    <h2>{{ product.name }} details:</h2>
    <ul>
      <li class="product-descr-heading">
        <ul>
          <li>Price: {{ product.price }}</li>
          <li>Country: {{ product.techSpecs.country }}</li>
        </ul>
      </li>

      <li class="product-descr-main">
        <ul class="descr-tech-specs">
          <li><span class="key">Memory</span><span class="value">{{ product.techSpecs.memory }}</span></li>
          <li><span class="key">CPU</span><span class="value">{{ product.techSpecs.CPU }}</span></li>
          <li><span class="key">RAM</span><span class="value">{{ product.techSpecs.RAM }}</span></li>
        </ul>
        <ul class="product-reviews">
          <h6>Reviews:</h6>
          <li v-for="review in product.reviews" :key="review.id" class="review">
            <p class="review-details">
              <span class="review-author">{{ review.name }}</span>
              <span :class="[{ 'low-rated': Number(review.rate) <= 3 }, 'review-rate']">
                <span v-for="star in review.rate" :key="star" class="star"></span>
              </span>
            </p>
            <p class="review-text">{{ review.text }}</p>
          </li>
        </ul>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      id: null
    }
  },
  computed: {
    getProduct() {
      return this.$store.state.products.find(item => Number(item.id) === Number(this.$route.params.id))
    }
  },

  created() {
    this.product = this.getProduct
  },
}
</script>

<style lang="sass" scoped>
@import '../sass/helpers'

.product-details-page

  .product-descr-main
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 40px

    .descr-tech-specs


      li
        display: flex
        justify-content: space-between

    .product-reviews
     

  .review
    padding: 20px 10px
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
    margin: 20px 0

    .review-details
      display: flex
      margin-bottom: 5px

      .review-author
        font-weight: 700
        margin-right: 20px

      .review-rate

        .star
          display: inline-block
          width: 20px
          height: 20px
          background-color: yellow
          margin: 0 1px

        &.low-rated .star
          background-color: red 

    .review-text
  
</style>