<template>
  <v-footer dark padless cols="12">
    <v-card class="flex" flat tile>
      <v-card-title class="teal">


        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" :href="icon[1]" target="_blank" dark icon>
          <v-icon size="24px">
            {{ icon[0] }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      fotos: [],
      filtro: "",
      icons: [
        ["mdi-linkedin", "https://www.linkedin.com/in/danilo-scipioni"],
        ["mdi-github", "https://github.com/daniloscipioni"],
      ],
    };
  },
  computed: {},
  methods: {},

  created() {},
};
</script>

<style scoped >
.footer {
  border-top: solid #f9f9f91b 1px;
  font-size: 11px;
  color: #808080;
  padding-left: 15px;
  padding-top: 20px;
  padding-bottom: 5px;
  text-align: center;
}
</style>
