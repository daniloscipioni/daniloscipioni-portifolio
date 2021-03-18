<template>
    <footer class="footer">{{ $t('footer.text', { name: 'Danilo Scipioni', year: '2021' }) }}</footer>
</template>

<script>

export default {
  components: {

  },

  data () {
    return {
      fotos: [],
      filtro: ''
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

<style scoped >
.footer {
    border-top: solid #f9f9f91b 1px;
    font-size: 11px;
    color: #808080;
    padding-left: 15px;
    padding-top: 20px;
    padding-bottom: 5px;
    text-align: center;

}
</style>
