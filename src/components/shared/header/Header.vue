<template>
  <header class="cabecalho">
    <nav class="menu">
      <ul class="menu-lista">
           <li class="menu-item">
            <router-link to="/" class="menu-link" @click.native="disparaAcao">{{ $t("header.home") }}</router-link>
            </li>
            <li class="menu-item">
            <router-link to="/contact" class="menu-link" @click.native="disparaAcao">{{ $t("header.contact") }}</router-link>
            </li>
            <li class="menu-item">
            <router-link to="/skill" class="menu-link" @click.native="disparaAcao"  >{{ $t("header.skill") }}</router-link>
            </li>
            <li class="menu-item">
            <router-link to="/funcionalidades" class="menu-link" @click.native="disparaAcao"  >{{ $t("header.func") }}</router-link>
            </li>
       
      </ul>

    </nav>
    <locale-changer/>
  </header>
</template>

<script>

import ChangeLang from '../select/ChangeLang.vue'

export default {
components: {
    'locale-changer': ChangeLang
  },
  data () {
    return {
      active: false,
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

.cabecalho{
    align-items: center;
    background: #f9f9f9;
    display: flex;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
}

.menu{
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

.router-link-exact-active{
 color: #333333;
 font-weight: bold;
}

.menu-link:hover {
  text-decoration: underline;
}

</style>
