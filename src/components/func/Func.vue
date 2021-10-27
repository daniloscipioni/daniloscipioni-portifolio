<template>
  <div>
    <div class="home">
      <div class="main-view">
    <h1>{{titulo}}</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa
        veritatis reprehenderit veniam, accusantium neque, itaque illo sit,
        iusto maiores minima voluptatibus fugit perspiciatis assumenda quam
        alias voluptas. Pariatur, consectetur.
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
