
<template>
  <div>
    {{ updatedNews }}
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
        <div class="cards" v-for="item in news.valor" :key="item.date">
          <meu-card
            :title="item.title"
            :date="item.date"
            :content="item.content"
            :link="item.link"
            source="Valor.com"
          />
        </div>
        <div class="cards" v-for="item in news.g1" :key="item.date">
          <meu-card
            :title="item.title"
            :date="item.date"
            :content="item.content"
            :link="item.link"
            source="G1.com"
          />
        </div>
        <div class="cards" v-for="item in news.wired" :key="item.date">
          <meu-card
            :title="item.title"
            :date="item.date"
            :content="item.content"
            :link="item.link"
            source="Wired.com"
          />
        </div>
        <div class="cards" v-for="item in news.theguardian" :key="item.date">
          <meu-card
            :title="item.title"
            :date="item.date"
            :content="item.content"
            :link="item.link"
            source="TheGuardian.com"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../banner/Banner.vue'
import Card from '../shared/card/Card.vue'
export default {
  components: {
    'meu-banner': Banner,
    'meu-card': Card
  },

  data () {
    return {
      url: require('@/assets/images/banner_home.jpg'),
      titulo: 'Home',
      news: []
    }
  },
  computed: {
    // uma função "getter" computada (computed getter)
    updatedNews: function () {
      // `this` aponta para a instância Vue da variável `vm`

      return this.updateNews()
    }
  },
  watch: {
    // sempre que a pergunta mudar, essa função será executada
    // news: function () {
    //   return this.updateNews()
    //   //this.debouncedGetAnswer()
    // },
  },
  methods: {
    updateNews: function () {
      // this.fullName = val + ' ' + this.lastName
      this.$store
        .dispatch('searchNews')
        .then((data) => {
          // this.$router.push({ path: '/' })
          this.news = data.data
        })
        .catch((err) => {
          // if (err.request.status === 401) {
          //   this.errorMessage = this.$t('login-register.error-message-login')
          //   this.user = {}
          // }
          console.log(err)
        })
    }
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
.cards {
  display: inline-flex;
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
