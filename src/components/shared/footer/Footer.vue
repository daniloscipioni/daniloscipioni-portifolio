<template>
  <v-footer absolute elevation-24>
    <v-col class="text-center" cols="12">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon :href="icon[1]" target="_blanck">
          <v-icon size="24px">{{ icon[0] }}</v-icon>
        </v-btn>
      </v-card-text>
    </v-col>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>@DaniloScipioni</strong>
    </v-col>
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
      links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    };
  },
  computed: {},
  methods: {},

  created() {},
};
</script>

<style scoped>
.v-sheet.v-footer:not(.v-sheet--outlined) {
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 11px rgb(0 0 0 / 14%),
    0 1px 10px 4px rgb(0 0 0 / 12%);
}
</style>
