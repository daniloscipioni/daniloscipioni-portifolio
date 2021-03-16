<template>
  <div>
    <section class="funcionalidades">
      <meu-banner :url="url" :titulo="titulo" />
    </section>
  </div>
</template>

<script>
import Banner from '../banner/Banner.vue'
export default {
  components: {
    'meu-banner': Banner
  },

  data () {
    return {
      url: require('@/assets/images/banner_functionalities.jpg'),
      titulo: 'Funcionalidades'
    }
  },
  computed: {},
  methods: {},

  created () {}
}
</script>

<style>
</style>
