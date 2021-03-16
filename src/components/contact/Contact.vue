<template>
  <div>
    <section class="contact">
      <meu-banner :url="url" :titulo="titulo" />
    </section>
  </div>
</template>

<script>

import Banner from '../banner/Banner.vue'
export default {
  components: {
    'meu-banner': Banner
  },

  data () {
    return {
      url: require('@/assets/images/banner_contact.jpg'),
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

<style scope>

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
