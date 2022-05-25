<template>
  <div class="text-center" style="display:flex;">
    <div v-for="item in itens" style="padding:5px;">
      <v-chip class="ma-2" >
         <v-icon>{{item.icon}}</v-icon>
        {{item.description}}</v-chip>
      <span/>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      item: {}
    }
  },
  props: {
    itens: Array,
  },
};
</script>
