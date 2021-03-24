<template>
  <section>
    <form @submit.prevent="sumbitLogin" class="login-form">
      <h3>Login form</h3>
      <div class="form-section">
        <label for="login">Login:</label> <br />
        <input type="text" id="login" autocomplete="off" required
          v-model="$store.state.loginData.login"
        />
      </div>

      <div class="form-section">
        <label for="password">Password:</label> <br />
        <input type="password" id="password" required
          v-model="$store.state.loginData.password"
        />
      </div>

      <div class="form-section">
        <input type="submit" value="Submit" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  methods: {
    sumbitLogin() {
      if 
        (
          this.$store.state.loginData.login === 'vitalii' &&
          this.$store.state.loginData.password === '0000'
        ) {
          this.$store.commit("confirmAuthorization")
          this.$router.replace({ name: "authorized" })
        } else {
          this.$store.commit("resetLoginForm")
          alert("Invalid login or password!")
        }
    }
  }
}
</script>

<style>
.login-form {
  width: 260px;
  margin: 20vh auto;
}

.form-section {
  margin-bottom: 30px;
}

input {
  display: inline-block;
  height: 24px;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgb(87, 87, 214);
}

input:focus, 
input:checked {
  outline: none;
  border-bottom: 1px solid orangered;
}

input[type="submit"] {
  background-color: lightblue;
  height: 40px;
  font-size: 24px;
  border-bottom: none;
}

input[type="submit"]:focus {
  border: 1px solid orangered;
}

label {
  display: inline-block;
  font-size: 12px;
  width: 100%;
  text-align: left;
}

</style>