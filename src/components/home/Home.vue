
<template>
  <div>

    <section class="home">
      <meu-banner :url="url" :titulo="titulo" />
      <h1>Home</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa veritatis reprehenderit veniam, accusantium neque, itaque illo sit, iusto maiores minima voluptatibus fugit perspiciatis assumenda quam alias voluptas. Pariatur, consectetur.

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
      url: require('@/assets/images/banner_home.jpg'),
      titulo: 'Home'
    }
  },
  computed: {},
  methods: {},

  created () {

  }
}
</script>
<style>

</style>
