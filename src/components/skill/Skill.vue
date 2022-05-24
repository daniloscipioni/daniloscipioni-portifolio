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
      object: ["Javascript", "Css", "Html", "Java", "Postgres", "Sql"],
    };
  },
  computed: {},
  methods: {},

  created() {},
};
</script>

<style>
</style>
