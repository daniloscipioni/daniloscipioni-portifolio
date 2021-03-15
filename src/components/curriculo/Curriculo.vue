<template>
  <div>
    <section class="habilidades">
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
      url: require('@/assets/images/banner_skills.jpg'),
      titulo: 'Habilidades'
    }
  },
  computed: {},
  methods: {},

  created () {}
}
</script>

<style>
</style>
