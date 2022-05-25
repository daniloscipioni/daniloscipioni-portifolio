<template>

    <div >
      <div>
        <h1>{{titulo}}</h1>
        <chips :itens="object" />
      </div>
    </div>

</template>

<script>

//import Banner from '../banner/Banner.vue'
import Chips from '../shared/chips/Chips.vue'
export default {
  components: {
    //'meu-banner': Banner
    chips: Chips
  },

  data () {
    return {
     // url: require('@/assets/images/banner_contact.jpg'),
      titulo: 'Contato',
      object: [
        { description: '@daniloscipioni', icon: 'mdi-github' },
        { description: '(11) 971266419', icon: 'mdi-whatsapp' },
        { description: 'www.linkedin.com/in/danilo-scipioni', icon: 'mdi-linkedin' }
      ],
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
