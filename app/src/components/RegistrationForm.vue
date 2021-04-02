<template>
  <form>
    <div class="form-group">
      <label for="register-email" class="form-label">*Email</label>
      <input type="email" id="register-email" class="form-input" autocomplete="off" v-model="formData.email" required />
    </div>

    <div class="form-group">
      <label for="register-password" class="form-label">*Password</label>
      <input type="password" id="register-password" class="form-input" v-model="formData.password" required />
    </div>

    <div class="form-group">
      <label for="register-confirm-password" class="form-label">*Confirm Password</label>
      <input type="password" id="register-confirm-password" class="form-input" v-model="formData.confirmPassword" required />
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
        password: '',
        confirmPassword: ''
      }
    }
  }
}
</script>

<style>

</style>