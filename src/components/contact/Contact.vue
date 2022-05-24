<template>

    <div >
      <div>
        <h1>{{titulo}}</h1>
        <ul>
          <li><v-icon>mdi-github</v-icon> @daniloscipioni</li>
          <li><v-icon>mdi-whatsapp</v-icon> (11) 971266419</li>
          <li><v-icon>mdi-linkedin</v-icon> www.linkedin.com/in/danilo-scipioni</li>
        </ul>
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
<style scoped>
li {
  list-style-type: none;
}
</style>
