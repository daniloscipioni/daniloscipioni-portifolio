
<template>
    <div class="home">
      <!-- <meu-banner :url="url" :titulo="titulo" /> -->
      <div class="main-view">
        <h1>Home</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa
        veritatis reprehenderit veniam, accusantium neque, itaque illo sit,
        iusto maiores minima voluptatibus fugit perspiciatis assumenda quam
        alias voluptas. Pariatur, consectetur.
      </div>
      <div class="side-news">
        <meu-news />
    </div>
  </div>
</template>

<script>
// import Banner from '../banner/Banner.vue'
// import Card from '../shared/card/Card.vue'
import News from '../news/News.vue'
export default {
  components: {
    // 'meu-banner': Banner,
    // 'meu-card': Card,
    'meu-news': News
  },

  data () {
    return {
      url: require('@/assets/images/banner_home.jpg'),
      titulo: 'Home',
      news: []
    }
  },
  // computed: {
  //   updatedNews: function () {
  //     return this.updateNews()
  //   }
  // },
  watch: {
    // sempre que a pergunta mudar, essa função será executada
    // news: function () {
    //   return this.updateNews()
    //   //this.debouncedGetAnswer()
    // },
  },
  methods: {
    // updateNews: function () {
    //   // this.fullName = val + ' ' + this.lastName
    //   this.$store
    //     .dispatch('searchNews')
    //     .then((data) => {
    //       // this.$router.push({ path: '/' })

    //       this.news = data.data
    //     })
    //     .catch((err) => {
    //       // if (err.request.status === 401) {
    //       //   this.errorMessage = this.$t('login-register.error-message-login')
    //       //   this.user = {}
    //       // }
    //       console.log(err)
    //     })
    // }
    //   return this.news;
    //  }
  },

  created () {}
}
</script>
<style scoped>
.home {
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
}
.main-view {
  text-align: justify;
  padding-right: 2rem;
}

.side-news {
  width: 35%;
}

@media screen and (min-width: 0) {
  .home {
    display: block;
    width: 100%;
    height: auto;
  }
  .main-view {
    text-align: justify;
    padding-right: 0rem;
  }
}

@media screen and (min-width: 768px) {
  .home {
    display: flex;
    height: auto;
  }
  .main-view {
    text-align: justify;
    padding-right: 2rem;
  }
}
</style>
