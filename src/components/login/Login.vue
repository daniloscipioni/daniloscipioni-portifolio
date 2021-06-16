<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="efetuarLogin" class="form-login">
      <div class="form-item">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form-item">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha" />
      </div>
      <div>
        <p class="alert alert-danger" v-if="mensagemErro">{{ mensagemErro }}</p>
        <button type="submit" class="btn btn-primary brn-block">Logar</button>
        <p>
        <router-link :to="{ name: 'novo.usuario' }">
          Não possui um cadastro, cadastre-se aqui!
        </router-link>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      usuario: {},
      mensagemErro: ''
    }
  },

  methods: {
    // efetuarLogin () {
    //   this.$store.dispatch('efetuarLogin', this.usuario)
    //     .then(() => {
    //       this.$router.push({ path: '' })
    //       this.mensagemErro = ''
    //     })
    //     .catch(err => {
    //       if (err.request.status === 401) {
    //         this.mensagemErro = ' Login ou senha inválido(s)!!!'
    //       }
    //     })
    // }
  }
}
</script>
<style scoped>
.form-login{

}
.form-item{
  padding: 5px;
}

.form-item label{
  padding-right: 3px;
}
</style>