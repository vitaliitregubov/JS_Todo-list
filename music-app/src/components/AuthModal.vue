<template>
  <div
    class="auth-modal"
    :style="{ display: authModalShow ? 'block' : 'none' }"
  >
    <div class="container">
      <div class="form-wrap">
        <button @click.prevent="toggleAuthModal" class="close-btn">x</button>
        <div class="tabs">
        <label
          for="tab-login-form"
          :class="[{ 'tab-active': formActiveTab === 'Login' }, 'label-radio']"
          >Login</label
        >
        <input
          type="radio"
          id="tab-login-form"
          name="tabs-form"
          value="Login"
          v-model="formActiveTab"
        />

        <label
          for="tab-registration-form"
          :class="[
            { 'tab-active': formActiveTab === 'Registration' },
            'label-radio',
          ]"
          >Registration</label
        >
        <input
          type="radio"
          id="tab-registration-form"
          name="tabs-form"
          value="Registration"
          v-model="formActiveTab"
        />
        </div>

        <keep-alive>
          <component :is="formActiveTab"> </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";

export default {
  name: "AuthModal",
  components: {
    Registration: RegistrationForm,
    Login: LoginForm,
  },
  data() {
    return {
      formActiveTab: "Login",
    };
  },
  computed: {
    // ...mapState({
    //   modal: 'authModalShow'
    // })
    ...mapState(["authModalShow"]),
  },
  methods: {
    ...mapMutations(["toggleAuthModal"]),
  },
};
</script>

<style>
.container {
  padding-top: 10vh;
}

.auth-modal {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #111;
}

.form-wrap {
  position: relative;
  display: flex;
  padding-top: 10vh;
  flex-direction: column;
  margin: auto;
  padding: 40px 20px 20px;
  width: 300px;
  background: #fff;
}

.form-group {
  margin: 20px 0;
}

.form-group input {
  width: 100%;
  height: 32px;
  padding: 0 10px;
}

.form-group input[type="submit"] {
  height: 40px;
  font-size: 24px;
  color: #fff;
  background-color: #ef5466;
  border: none;
  margin-top: 10px;
  cursor: pointer;
}

input[type="radio"] {
  display: none;
}

input[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}

.tabs {
  display: flex;
}

.label-radio {
  display: inline-block;
  width: 50%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid rgba(0, 0, 0, 0.4);
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease-out;
}

.label-radio:hover {
  border-color: #ef5466;
  color: #ef5466;
}

.label-radio.tab-active {
  border-color: #ef5466;
  color: #ef5466;
}

.close-btn {
  position: absolute;
  right: -10px;
  top: -10px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-weight: 400;
  background-color: #ef5466;
  border: none;
  color: #fff;
  cursor: pointer;
}

</style>