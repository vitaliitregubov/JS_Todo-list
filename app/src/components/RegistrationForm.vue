<template>
  <form @submit.prevent="register(formData)">
    <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>

    <div class="form-group">
      <label for="register-email" class="form-label">*{{ $t('auth.email') }}</label>
      <input
        type="email" v-model.trim="formData.email" required
        id="register-email" :class="[{ 'has-error' : emailError }, 'form-input']" autocomplete="off" 
      />
    </div>

    <div class="form-group password-field">
      <label for="register-password" class="form-label">*{{ $t('auth.password') }}</label>
      <input
        :type="passwordInputType" v-model.trim="formData.password"
        id="register-password" :class="[{ 'has-error': passwordError }, 'form-input']" required
      />
      <span @click="toggleVisibility('passwordInputType')" class="toggle-visibility">
        <i :class="[passwordInputType === 'text' ? 'fa-eye' : 'fa-eye-slash', 'fas']"></i>
      </span>
    </div>

    <div class="form-group password-field">
      <label for="register-confirm-password" class="form-label">*{{ $t('auth.confirmPass') }}</label>
      <input 
        :type="confirmPasswordInputType" v-model.trim="formData.confirmPassword"
        id="register-confirm-password" :class="[{ 'has-error': passwordError}, 'form-input']" required 
      />
      <span @click="toggleVisibility('confirmPasswordInputType')" class="toggle-visibility">
        <i :class="[confirmPasswordInputType === 'text' ? 'fa-eye' : 'fa-eye-slash', 'fas']"></i>
      </span>
    </div>

    <div class="form-group">
      <input type="submit" :value="$t('auth.submit')" class="form-submit" />
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      errorMsg: '',
      passwordInputType: 'password',
      confirmPasswordInputType: 'password',
      emailError: false,
      passwordError: false
    }
  },
  methods: {
    ...mapActions(['register']),
    toggleVisibility(field) {
      this[field] = this[field] === 'password' ? 'text' : 'password'
    },
    validateForm(password, confirmPassword) {
      if (password === confirmPassword && password.length >= 6){
        return false
      } else if (password.length < 6) {
          return this.$t('auth.errorMsgs.shortPass')
      } else if (confirmPassword !== password) {
          return this.$t('auth.errorMsgs.passMismatch')
      }
    },
    async register({ email, password, confirmPassword }) {
      const passwordMatchingRes = this.validateForm(password, confirmPassword)
      if (passwordMatchingRes) {
        this.errorMsg = passwordMatchingRes
        this.passwordError = true
        return
      } else {
          this.passwordError = false

          try {
            await this.$store.dispatch('register', { email, password })
          } catch(error) {
              this.errorMsg = this.$t('auth.errorMsgs.emailAddressTaken')
              this.emailError = true
              return
          }
      
          window.location.reload()
      }

   
    }
  }
}
</script>
