<template>
  <div>
    <div>
      <div>
        <h1>{{ titulo }}</h1>
        <ul>
          <li>Javascript</li>
          <li>htmlt</li>
          <li>csst</li>
          <li>postgrest</li>
          <li>sqlservert</li>
          <li>javat</li>
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
