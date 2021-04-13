<template>
  <form @submit.prevent="login(formData)">
    <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
    <div class="form-group">
      <label for="login-email" class="form-label">*{{ $t('auth.email') }}</label>
      <input
        type="email" v-model.trim="formData.email" required 
        id="login-email" :class="[{ 'has-error': errorMsg }, 'form-input']" autocomplete="off"
      />
    </div>

    <div class="form-group password-field">
      <label for="login-password" class="form-label">*{{ $t('auth.password') }}</label>
      <input
        :type="passwordInputType" v-model.trim="formData.password" required
        id="login-password" :class="[{ 'has-error': errorMsg }, 'form-input']" 
      />
      <span @click="toggleVisibility" class="toggle-visibility">
        <i :class="[passwordInputType === 'text' ? 'fa-eye' : 'fa-eye-slash', 'fas']"></i>
      </span>
    </div>

    <div class="form-group">
      <input type="submit" :value="$t('auth.submit')" class="form-submit" />
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
      errorMsg: '',
      passwordInputType: 'password'
    }
  },
  methods: {
    toggleVisibility() {
      this.passwordInputType = this.passwordInputType === 'password' ? 'text' : 'password'
    },
    async login({ email, password }) {
      try {
        await this.$store.dispatch('login', { email, password })
        window.location.reload()
      } catch(error) {
        this.errorMsg = this.$t('auth.errorMsgs.invalidCreds')
        return
      }
    }
  }
}
</script>

