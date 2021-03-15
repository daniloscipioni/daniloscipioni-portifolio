<template>
  <div>
    <section class="banner__section">
        <img class="banner" :src="url" :alt="titulo">
    </section>

  </div>

</template>
<script>
export default {
  props: ['url', 'titulo']
}
</script>
<style scoped>

.banner{
    background: no-repeat center / cover;
    width: 100%;
    height: calc(100vh - 50px);
}

</style>
