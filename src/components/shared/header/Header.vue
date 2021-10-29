<template>
  <header class="cabecalho">
    <header-logged :rotas="rotas" v-if="userIsLogged" />
    <header-not-logged :rotas="rotas" v-else/>
    <span class="group">
      <div style="display: flex;align-items: center;padding-right: 25px;">
     <locale-changer class="locale"/>
      </div>
       <div>
     <profile :user="activeUser" v-if="userIsLogged" />
    </div>
    </span>
  </header>
</template>

<script>
import ChangeLang from '../select/ChangeLang.vue'
import HeaderLogged from '../header/HeaderLogged.vue'
import HeaderNotLogged from '../header/HeaderNotLogged.vue'
import { mapGetters } from 'vuex'
import logoutMixin from '../../../mixins'
import Profile from '../profile/Profile.vue'

export default {
  name: 'Header',
  mixins: [logoutMixin],
  components: {
    'locale-changer': ChangeLang,
    'header-logged': HeaderLogged,
    'header-not-logged': HeaderNotLogged,
    'profile': Profile
  },
  computed: {
    ...mapGetters(['userIsLogged']),
    ...mapGetters(['activeUser'])
  },
  data () {
    return {
    }
  },

  props: {
    rotas: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.cabecalho {
  align-items: center;
    background: #24306a;
    display: flex;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 145px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
}
.cabecalho .group{
  display: flex;
}
.menu {
  display: flex;
}

.menu-lista {
  /* display: flex;
  margin-bottom: 0; */
}

.menu-item {
  /* list-style: none; */
}

.menu-item a {
  /* list-style: none; */
}

.menu-item:last-child a {
  margin-right: 0;
}

.menu-link  {
  color: white !important;
  margin-right: 1.25rem;
  text-decoration: none;
  text-transform: capitalize;
}
.menu-lista .menu-link a{
  text-decoration: none;
}
.menu-link:hover {
  font-size: 20px;
}

.router-link-exact-active {
  color: #333333;
  font-weight: bold;
}

.image-logout {
  background-image: url('./images/logout.png');
  width: 25px;
  height:25px;
  background-repeat: no-repeat;
  background-size: auto;
  padding-right: 50px;
  border-right: solid 1px #808080;

}
.image-logout:hover {
  background-image: url('./images/logout_dark.png');
  cursor: pointer;
  width: 25px;
  height:25px;
  background-repeat: no-repeat;
  background-size: auto;
  padding-right: 50px;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none !important;
}
.locale{
  padding-left:10px;
}

@media screen and (min-width: 0) {
  .menu-lista {
    display: block;
    text-align: center;
  }
  
}

@media screen and (min-width: 768px) {
  .menu-lista {
    display: flex;
  }
}

@media screen and (min-width: 0) {
  .menu {
    display: block;
    width: 100%;
    height: 150px;
  }

}

@media screen and (min-width: 768px) {
  .menu {
    display: flex;
    height: auto;
  }
}

@media screen and (min-width: 0) {
  .menu-item {
    list-style: none;
    padding: 5px;
  }
}

@media screen and (min-width: 768px) {
  .menu-item {
    list-style: none;
  }
}
@media screen and (max-width: 768px) {
  .cabecalho {
    padding-bottom: 0.7em;
    height: auto;
    align-items: center;
    padding-top: 10px;
  }
  .menu-link {
    color: #808080;
    margin-right: 0rem;
    text-decoration: none;
    text-transform: capitalize;
  }
  .menu-link:hover {
    color: #808080;
    margin-right: 0rem;
    text-decoration: none;
    text-transform: capitalize;
  }
}
</style>
