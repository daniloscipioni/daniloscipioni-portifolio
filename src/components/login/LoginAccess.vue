<template>
  <div>
      <!-- <meu-banner :url="url" :titulo="titulo" /> -->
      <div>
        <login />
      </div>
  </div>
</template>

<script>

// import Banner from '../banner/Banner.vue'
import Login from '../login/Login.vue'
export default {
  components: {
    // 'meu-banner': Banner,
    login: Login
  },

  data () {
    return {
      // url: require('@/assets/images/banner_contact.jpg'),
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
    padding-right: 0px;
    flex: auto;
}

</style>
