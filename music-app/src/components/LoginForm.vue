<template>
  <form @submit.prevent="login(formData)">
    <div class="form-group">
      <label for="form-email">*Email:</label>
      <input type="email" id="form-email" :class="{ 'has-error' : loginFailed }" autocomplete="off" required v-model="formData.email" />
      <span v-if="loginFailed" class="error">Invalid email or password</span>
    </div>

    <div class="form-group">
      <label for="form-password">*Password:</label>
      <input type="password" id="form-password" :class="{ 'has-error' : loginFailed }" required v-model="formData.password" />
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
      },
      loginFailed: false,
    }
  },
  methods: {
    async login({ email, password }) {
      try {
        await this.$store.dispatch('login', { email, password })
      } catch(error) {
        console.log(error)
        this.loginFailed = true
        return
      }

      window.location.reload()
    }
  },
}
</script>

<style>
input.has-error {
  border: 1px solid red;
}

.form-group {
  position: relative;
}

.error {
  color: red;
  position: absolute;
  bottom: -22px;
  left: 0;
}
</style>