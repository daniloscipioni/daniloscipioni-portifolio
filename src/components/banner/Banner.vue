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
@media screen and (min-width: 0) {
    .banner {
        height: calc(100vh - 150px);
    }
}

@media screen and (min-width: 768px) {
    .banner {
        height: calc(100vh - 60px);
    }
}
</style>
