<template>
<div>
      <ul class="menu-lista" >
        <li class="menu-item" v-for="rota in rotas" :key="rota.path" v-if="rota.meta" >
          <router-link :to="rota.path ? rota.path : '/'" class="menu-link" >
            {{ $t(rota.title) }}</router-link
          >
        </li>
      </ul>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      active: false
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

</style>
