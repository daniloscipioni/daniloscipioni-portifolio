<template>
  <div >
    <select v-model="$i18n.locale" class="menu-item-select">
      <option v-for="(lang, i) in changeLang()" :key="`Lang${i}`" :value="lang[0]">{{ lang[1] }}</option>
    </select>
  </div>
</template>

<script>
import i18n from '../../../i18n'
export default {

  name: 'locale-changer',
  data () {
    return {

    }
  },
  computed: {
    langs () {
      return { langs: [['pt-br', i18n.t('portuguese')], ['en', i18n.t('english')]] }
    }

  },
  methods: {
    changeLang () {
      return this.langs.langs
    }
  }
}
</script>

<style scoped>
.menu-item-select {
    border: 0;
    background-color: inherit;
    color: #808080;
    padding-left: 20px;
}
</style>
