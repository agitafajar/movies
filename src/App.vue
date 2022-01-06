<template>
  <v-app>
    <NavBar/>
    <v-main>
      <router-view/>
    </v-main>
    <v-col style="background-color:#fff">
    </v-col>
    <Footer/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';
export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
