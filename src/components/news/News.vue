<template>
  <div>
    {{ updatedNews }}
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

</template>
<script>
import Card from '../shared/card/Card.vue'
export default {
  components: {
    'meu-card': Card
  },
  data () {
    return {
      news: []
    }
  },
  computed: {
    updatedNews: function () {
      return this.updateNews()
    }
  },
  methods: {
    updateNews: function () {
      // this.$loading(true)
      // this.fullName = val + ' ' + this.lastName
      this.$store
        .dispatch('searchNews')
        .then((data) => {
          this.news = data.data
          // this.$loading(false)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    //   return this.news;
    //  }
  }
}
</script>

<style scoped>
.cards {
  display: inline-flex;
}
</style>
