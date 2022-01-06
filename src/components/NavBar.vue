<template>
  <v-container>
    <v-toolbar flat class="mainHeader" color="#121212">
      <v-toolbar-title><router-link to="/">
        <v-img :src="require('../assets/movies.png')" contain height="80" width="150"/></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-menu open-on-hover offset-y transition="slide-x-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
          <v-icon>mdi-earth</v-icon> ID
          </v-btn>
        </template>
        <v-list height="137" width="230" outlined elevation="0" class="rounded-md elevation-0">
          <v-container>
            <v-radio-group column class="mt-1 mb-0">
              <v-radio label="English (EN)" value="radio-1"></v-radio>
              <p class="linebh"></p>
              <v-radio label="Bahasa (ID)" value="radio-2"></v-radio>
            </v-radio-group>
          </v-container>
        </v-list>
      </v-menu>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
};
</script>
