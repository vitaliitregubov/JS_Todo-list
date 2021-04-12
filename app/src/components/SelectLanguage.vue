<template>
  <div class="select-language">
    <select v-model="$i18n.locale" id="lang" aria-label="select a language">
      <option v-for="lang in languages" :key="lang" :value="lang">{{ lang }}</option>
    </select>
    <i class="fas fa-chevron-down"></i>
   </div>
</template>

<script>
export default {
  data() {
    return {
      languages: ['en', 'ru']
    }
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ru' : 'en'
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/helpers'

.select-language
  position: relative
  margin-right: auto
  margin-left: 20px

  select
    background-color: transparent
    color: inherit
    width: 42px
    height: 30px
    padding-left: 4px
    cursor: pointer
    appearance: none

  i
    position: absolute
    right: 4px
    top: 8px
    color: $color-active
    pointer-events: none
</style>