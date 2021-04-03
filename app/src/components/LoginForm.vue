<template>
  <form @submit.prevent="login(formData)">
    <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
    <div class="form-group">
      <label for="login-email" class="form-label">*Email</label>
      <input type="email" id="login-email" class="form-input" autocomplete="off" v-model="formData.email" required />
    </div>

    <div class="form-group">
      <label for="login-password" class="form-label">*Password</label>
      <input type="password" id="login-password" class="form-input" v-model="formData.password" required />
    </div>

    <div class="form-group">
      <input type="submit" value="Submit" class="form-submit" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      errorMsg: ''
    }
  },
  methods: {
    async login({ email, password }) {
      try {
        await this.$store.dispatch('login', { email, password })
        window.location.reload()
      } catch(error) {
        console.log(error)
        this.errorMsg = 'Invalid Login or Password'
        return
      }
    }
  }
}
</script>
