<template>
  <div>
    <div>
      <div>
        <h1>{{ titulo }}</h1>

        <chips :itens="object" />
      </div>
    </div>
  </div>
</template>

<script>
//import Banner from '../banner/Banner.vue'
import Chips from "../shared/chips/Chips.vue";
export default {
  components: {
    //    'meu-banner': Banner
    chips: Chips,
  },

  data() {
    return {
      //  url: require('@/assets/images/banner_skills.jpg'),
      titulo: "Habilidades",
      object: [
        { description: 'Javascript', icon: 'mdi-language-javascript' },
        { description: 'Node', icon: 'mdi-nodejs' },
        { description: 'Html', icon: 'mdi-language-html5' },
        { description: 'CSS', icon: 'mdi-language-css3' },
        { description: 'Postgres', icon: 'mdi-database' },
        { description: 'Java', icon: 'mdi-language-java' },
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
