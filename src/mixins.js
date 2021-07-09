export default {
  methods: {
    efetuarLogout () {
      this.$loading(true)
      setTimeout(() => {
        this.$store.commit('DESLOGAR_USUARIO')
        this.$router.push({ path: '/login' })
        this.$loading(false)
      }, 1000)
    }
  }
}
