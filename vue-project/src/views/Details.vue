<template>
  <section>
    <h1>{{ this.$store.state.links[this.$route.params.id].title }}</h1>
    <p>{{ description }}</p>
  </section>
</template>

<script>
export default {
  props: ["description"],
};
</script>

<style>
</style>