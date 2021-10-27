<template>
  <div class="home">
      <!-- <meu-banner :url="url" :titulo="titulo" /> -->
      <div class="main-view" style="position: relative;
    margin: auto;">
        <login class="login"/>
      </div>
  </div>
</template>

<script>

//import Banner from '../banner/Banner.vue'
import Login from '../login/Login.vue'
export default {
  components: {
   // 'meu-banner': Banner,
    login: Login
  },

  data () {
    return {
      url: require('@/assets/images/banner_contact.jpg'),
      titulo: 'Login'
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
 .login{
    /* font-family: Pacifico, cursive; */
    color: black;
    position: absolute;
    left: 50%;
    /* text-shadow: 0 4px 4px rgba(0, 0, 0, 0.75); */
    top: 200px;
    text-align: center;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 250px;
    background-color: white;
    border-radius: 10px;
}

.login-banner{
  position: relative;
}
</style>
