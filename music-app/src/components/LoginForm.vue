<template>
  <form @submit.prevent="login(formData)">
    <div class="form-group">
      <label for="form-email">*Email:</label>
      <input type="email" id="form-email" autocomplete="off" required v-model="formData.email" />
    </div>

    <div class="form-group">
      <label for="form-password">*Password:</label>
      <input type="password" id="form-password" required v-model="formData.password" />
    </div>

    <div class="form-group">
      <input type="submit" value="Submit" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login({ email, password }) {
      try {
        await this.$store.dispatch('login', { email, password })
      } catch(error) {
        console.log(error)
        return
      }

      // window.location.reload()
    }
  },
}
</script>

<style>

</style>