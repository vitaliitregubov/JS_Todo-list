<template>
  <main class="flex column align-center pt-lg">
    <img src="../assets/404.png" alt="not-found-page" />
    <h2>404: Page not found</h2>
    <router-link :to="{ name: 'Home' }" class="home-link action-btn border-rounded"
      ><button>Back to the Home page</button></router-link
    >
  </main>
</template>

<style lang="sass" scoped>
.home-link
  margin-top: 20px
  padding: 10px 20px

  &:hover
    opacity: 0.9
  // padding: 10px 20px
  // background-color: #333
  // letter-spacing: 0.1rem

img
  height: 40vh
  width: auto
</style>