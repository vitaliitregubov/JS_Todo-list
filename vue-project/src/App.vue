<template>
  <div>
    <div v-for="item in this.$store.state.links" :key="item.id">
      <router-link :to="{ name: 'details', params: { id: item.id, description: item.description } }">
        {{ item.title }}
      </router-link>
    </div>

    <router-view :key="$route.path" />
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => this.$router.replace({ name: 'details', params: { id: 0 } }), 3000)
  }
};
</script>

<style lang="scss">
a {
  color: inherit;
}

.router-link-exact-active {
  color: pink;
}

.page-footer {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40px;
  background-color: #111;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
