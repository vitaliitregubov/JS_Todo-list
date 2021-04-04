<template>
  <section :class="[{ shown: modalShown }, 'modal-wrap']">
    <div class="modal-form">
      <button @click.prevent="toggleModal" class="modal-close-btn">
        <i class="fas fa-times"></i>
      </button>
      
      <ul class="form-tabs">
        <li @click="formShown = 'LoginForm'" :class="[{ active: formShown === 'LoginForm' }, 'form-tab']">Login</li>
        <li @click="formShown = 'RegistrationForm'" :class="[{ active: formShown === 'RegistrationForm' }, 'form-tab']">Registration</li>
      </ul>

      <keep-alive>
        <component :is="formShown" :toggleVisibility="toggleVisibility"></component>
      </keep-alive>
    </div>
  </section>
</template>

<script>
import LoginForm from '@/components/LoginForm';
import RegistrationForm from '@/components/RegistrationForm';
import { mapState, mapMutations } from 'vuex';
 
export default {
  components: {
    LoginForm,
    RegistrationForm
  },
  data() {
    return {
      formShown: 'LoginForm'
    }
  },
  computed: {
    ...mapState(['modalShown'])
  },
  methods: {
    ...mapMutations(['toggleModal']),
    toggleVisibility(field) {
      this[field] = this[field] === 'password' ? 'text' : 'password'
    },
  }
}
</script>

<style lang="sass">
@import '../sass/variables'

.modal-wrap
  display: none
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  background-color: rgba(0, 0, 0, 0.7)

  &.shown
    display: block

  .modal-form
    position: relative
    width: 300px
    margin: 10vh auto 0
    padding: 30px 20px 10px
    background: #fff

    .form-tabs
      display: flex
      height: 40px
      margin-bottom: 20px
      list-style: none
      user-select: none

      .form-tab
        width: 50%
        text-align: center
        line-height: 40px
        border: 2px solid rgba(0, 0, 0, 0.6)
        color: rgba(0, 0, 0, 0.6)
        cursor: pointer
        font-size: 1.2rem

        &.active
          border-color: $color-active
          color: $color-active

    .error-msg
      position: relative
      padding-left: 30px
      color: red

      &::before
        content: "!"
        position: absolute
        left: 0
        display: inline-block
        width: 20px
        height: 20px
        border-radius: 50%
        font-weight: bold
        text-align: center
        color: #fff
        background-color: red

    .form-group
      margin: 20px 0
      display: flex
      flex-direction: column

      .form-label
        font-size: 1.1rem
        font-weight: 400
        padding-bottom: 2px

      .form-input
        height: 34px
        padding: 0 10px

        &.has-error
          border: 2px solid red

      .form-submit
        height: 40px
        border: none
        cursor: pointer
        margin-top: 10px
        background-color: $color-active
        color: #fff
        font-size: 1.6rem

      &.password-field
        position: relative

        .toggle-visibility
          position: absolute
          display: inline-block
          text-align: center
          font-weight: 400
          right: 0
          bottom: 0
          width: 34px
          height: 34px
          cursor: pointer

          i
            font-size: 16px
            line-height: 34px

    .modal-close-btn
      position: absolute
      right: -15px
      top: -15px
      border: none
      width: 30px
      height: 30px
      border-radius: 50%
      background-color: $color-active
      cursor: pointer

      i
        vertical-align: middle
</style>