
<template>
  <div>
    
    <section class="home">
      <meu-banner :url="url" :titulo="titulo" />
       <p>{{ $t("hello") }} {{ $i18n.locale }}</p>
    </section>
    Home
  
  </div>
  
</template>

<script>
import Banner from '../banner/Banner.vue'
export default {
  components: {
    'meu-banner': Banner,
  },

  data () {
    return {
      url: require('@/assets/images/banner_home.jpg'),
      titulo: 'Home',
    }
  },
  computed: {},
  methods: {},

  created () {
   
  },
}
</script>
<style>

</style>
