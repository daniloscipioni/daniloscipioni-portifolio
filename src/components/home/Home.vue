
<template>
    <div class="home">
      <!-- <meu-banner :url="url" :titulo="titulo" /> -->
      <div class="main-view">
        <h1>{{titulo}}</h1>
        Este portifólio foi criado para falar um pouco das minhas experiencias profissionais e habilidades que adquiri no decorrer da minha carreria profissional.
      </div>
      <div class="side-news">
        <!-- <meu-news /> -->
    </div>
  </div>
</template>

<script>
// import Banner from '../banner/Banner.vue'
// import Card from '../shared/card/Card.vue'
// import News from '../news/News.vue'
export default {
  components: {
    // 'meu-banner': Banner,
    // 'meu-card': Card,
    // 'meu-news': News
  },

  data () {
    return {
     // url: require('@/assets/images/banner_home.jpg'),
      titulo: 'Home',
      news: []
    }
  },
  watch: {
    
  },
  methods: {

  },

  created () {
  
  }
}
</script>
