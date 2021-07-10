
<template>
  <div>

    <section class="home">
      <meu-banner :url="url" :titulo="titulo" />
      <div class="cards">
        <meu-card  />
      <meu-card  />
      <meu-card  />
      </div>
      
      <h1>Home</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa veritatis reprehenderit veniam, accusantium neque, itaque illo sit, iusto maiores minima voluptatibus fugit perspiciatis assumenda quam alias voluptas. Pariatur, consectetur.

    </section>
     </div>

</template>

<script>
import Banner from '../banner/Banner.vue'
import Card from '../shared/card/Card.vue'
export default {
  components: {
    'meu-banner': Banner,
    'meu-card' : Card
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
<style scoped>
.cards{
  display: inline-flex;
}
</style>
