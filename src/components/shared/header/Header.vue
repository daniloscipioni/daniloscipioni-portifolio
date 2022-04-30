<template>
  <div class="ma-12 pa-12">
    <v-card>
      <v-navigation-drawer permanent expand-on-hover fixed>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src=""></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Danilo Scipioni
              </v-list-item-title>
              <v-list-item-subtitle>danilo.edu@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item link v-for="rota in rotas" :key="rota.key">
            <v-list-item-title>
              <router-link class="routerLink" :to="rota.path">
                <v-list-item-icon>
                  <v-icon>{{ rota.icon }} </v-icon>
                </v-list-item-icon>
                {{ $t(rota.title) }}
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    rotas: Array,
  },
};
</script>
<style scoped>
.md-theme-default a:not(.md-button) {
  color: rgb(117 117 117);
  text-decoration: none;
  /* color: var(--md-theme-default-primary-on-background, #448aff); */
}
</style>
