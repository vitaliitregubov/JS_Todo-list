<template>
  <form>
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
      }
    }
  }
}
</script>

<style>

</style>