<template>
    <form @submit.prevent="register" class="form">
    <div class="error-msg" v-if="alertError">
      {{ errorMsg }}
    </div>
    <div class="form-group">
      <label for="form-name">*Name:</label>
      <input
        type="text" id="form-name" required
        v-model="formData.name"
      />
    </div>

    <div class="form-group">
      <label for="form-email">*Email:</label>
      <input
        type="email" id="form-email" autocomplete="off" required
        v-model="formData.email"
      />
    </div>

    <div class="form-group">
      <label for="form-password">*Password:</label>
      <input
        type="password" id="form-password" required 
        v-model="formData.password"
      />
    </div>

    <div class="form-group">
      <label for="form-confirm-password">*Confirm Password:</label>
      <input 
        type="password" id="form-confirm-password" required
        v-model="formData.confirmPassword"
      />
    </div>

    <div class="form-group">
      <input type="submit" value="Submit" :disabled="!isFormValid" />
    </div>
  </form>
</template>

<script>
// import { auth, usersCollection } from '@/includes/firebase';

export default {
  data() {
    return {
      isFormValid: true,
      formData: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      alertError: false,
      errorMsg: '',
    }
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('register', this.formData);
      } catch(error) {
        this.alertError = true
        console.log(error.message)
        this.errorMsg = error.message
        return
      }
    
      window.location.reload()
    },
  },

}
</script>

<style scoped>
.form {
  position: relative;
}

.error-msg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 2px solid red;
}
</style>