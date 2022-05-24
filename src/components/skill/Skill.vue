<template>
  <div>
    <div>
      <div>
        <h1>{{ titulo }}</h1>
        <ul>
          <li>Javascript</li>
          <li>html</li>
          <li>css</li>
          <li>postgres</li>
          <li>sqlserver</li>
          <li>java</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//import Banner from '../banner/Banner.vue'
export default {
  components: {
    //    'meu-banner': Banner
  },

  data() {
    return {
      //  url: require('@/assets/images/banner_skills.jpg'),
      titulo: "Habilidades",
    };
  },
  computed: {},
  methods: {},

  created() {},
};
</script>

<style>
</style>
