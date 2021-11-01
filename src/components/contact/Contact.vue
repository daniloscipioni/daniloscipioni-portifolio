<template>
  
    <div class="home">
      <div class="main-view">
        <h1>{{titulo}}</h1>
        Github: @daniloscipioni
        WhatsApp: 11 971266419
        linkedin: linkedin.com/in/danilo-scipioni-95a74428
      </div>
    </div>
 
</template>

<script>

//import Banner from '../banner/Banner.vue'
export default {
  components: {
    //'meu-banner': Banner
  },

  data () {
    return {
     // url: require('@/assets/images/banner_contact.jpg'),
      titulo: 'Contato'
    }
  },
  computed: {

  },
  methods: {

  },

  created () {

  }
}
</script>
