<template>
  <header class="cabecalho">
    <header-logged :rotas="rotas" v-if="userIsLogged" />
    <header-not-logged :rotas="rotas" v-else/>
    <span class="group">
     <div v-on:click="efetuarLogout" class="image-logout" v-if="userIsLogged" :title="$t('header.logout')"></div>
     <locale-changer class="locale"/>
    </span>
  </header>
</template>

<script>
import ChangeLang from '../select/ChangeLang.vue'
import HeaderLogged from '../header/HeaderLogged.vue'
import HeaderNotLogged from '../header/HeaderNotLogged.vue'
import { mapGetters } from 'vuex'
import logoutMixin from '../../../mixins'

export default {
  name: 'Header',
  mixins: [logoutMixin],
  components: {
    'locale-changer': ChangeLang,
    'header-logged': HeaderLogged,
    'header-not-logged': HeaderNotLogged
  },
  computed: {
    ...mapGetters(['userIsLogged'])
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

<style scope>
.cabecalho {
  align-items: center;
  background: #f9f9f9;
  display: flex;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
}
.cabecalho .group{
  display: flex;
}
.menu {
  display: flex;
}

.menu-lista {
  display: flex;
}

.menu-item {
  list-style: none;
}

.menu-item:last-child a {
  margin-right: 0;
}

.menu-link {
  color: #808080;
  margin-right: 1.25rem;
  text-decoration: none;
  text-transform: capitalize;
}

.router-link-exact-active {
  color: #333333;
  font-weight: bold;
}

.menu-link:hover {
  text-decoration: underline;
}

.image-logout {
  background-image: url('./images/logout.png');
  width: 25px;
  height:25px;
  background-repeat: no-repeat;
  background-size: auto;
  padding-right: 20px;
  border-right: solid 1px #808080;

}
.image-logout:hover {
  background-image: url('./images/logout_dark.png');
  cursor: pointer;
  width: 25px;
  height:25px;
  background-repeat: no-repeat;
  background-size: auto;
  padding-right: 20px;
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
  }
  .menu-link {
    color: #808080;
    margin-right: 0rem;
    text-decoration: none;
    text-transform: capitalize;
  }
}
</style>
