<template>
  <div>
    <div>
      <div>
        <h1>{{ titulo }}</h1>
        Esta área é exclusivamente para apresentar um pouco de como esta
        plataforma foi desenvolvida
        <!-- <ul>
        <li>Vue</li>
        <li>node</li>
        <li>html</li>
        <li>css</li>
        <li>sass</li>
        <li>heroku</li>
        <li>postgres</li>
        </ul> -->
        <chips :itens="object" />
      </div>
    </div>
  </div>
</template>

<script>
// import Banner from '../banner/Banner.vue'
import Chips from "../shared/chips/Chips.vue";
export default {
  components: {
    // 'meu-banner': Banner
    chips: Chips,
  },

  data() {
    return {
      //url: require('@/assets/images/banner_functionalities.jpg'),
      titulo: 'Funcionalidades',
      object: [
        { description: 'Vue', icon: 'mdi-vuejs' },
        { description: 'Node', icon: 'mdi-nodejs' },
        { description: 'Html', icon: 'mdi-language-html5' },
        { description: 'CSS', icon: 'mdi-language-css3' },
        { description: 'Postgres', icon: 'mdi-database' },
        { description: 'SASS', icon: 'mdi-sass' },
        { description: 'Heroku', icon: 'mdi-cloud' }
      ],
    };
  },
  computed: {},
  methods: {},

  created() {},
};
</script>

<style>
</style>
