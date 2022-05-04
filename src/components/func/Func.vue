<template>
  <div>
    <div>
      <div>
    <h1>{{titulo}}</h1>
       Esta área é exclusivamente para apresentar um pouco de como esta plataforma foi desenvolvida
      <ul>
        <li>Vue</li>
        <li>node</li>
        <li>html</li>
        <li>css</li>
        <li>sass</li>
        <li>heroku</li>
        <li>postgres</li>
        </ul>
    </div>
    </div>
  </div>
</template>

<script>
// import Banner from '../banner/Banner.vue'
export default {
  components: {
   // 'meu-banner': Banner
  },

  data () {
    return {
      //url: require('@/assets/images/banner_functionalities.jpg'),
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
