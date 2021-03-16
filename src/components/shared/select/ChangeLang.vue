<template>
  <div >
    <select v-model="$i18n.locale" class="menu-item-select">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['pt-br','en'] }
  }
}
</script>

<style scoped>
.menu-item-select {
    border: 0;
    background-color: inherit;
    color: #808080;
}
</style>