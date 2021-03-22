<template>
  <div id="nav" :style="{ 'backgroundColor': pickColor }">
    <div v-if="$store.state.isLoaded">
      <figure>
        <img :src="$store.state.user.picture.large" alt="user-photo">
      </figure>

      <figcaption>{{ $store.state.user.name.first }}</figcaption>
    </div>

    <button @click="load">Change user</button>
    <input type="color" v-model="pickColor" />
  </div>

  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    pickColor: {
      get() {
        return this.$store.state.color
      },
      set(value) {
        this.$store.dispatch('setColor', value)
      }
    }
  },
  methods: {
    load() {
      this.$store.dispatch('loadUserInfo')
    }
  }
}
</script>

<style lang="scss">
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
