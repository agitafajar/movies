<template>
<div>
<v-row>
  <v-col>
  <v-img lazy-src="https://picsum.photos/id/11/10/6" height="700" :src="require('../assets/banner.jpg')" class="align-center">
  <v-row justify="center">
      <v-card-text class="text-center">
        <p class="text-h3 text--primary font-weight-bold">Unlimited movies, TV shows, and more.</p>
        <div class="text-h5">Watch anywhere. Cancel anytime.<br>Ready to watch? Enter your email to create or restart your membership.</div>
      </v-card-text>
      <v-col cols="12" md="5" class="mb-16">
        <v-text-field v-model="email" outlined label="Email Address" prepend-inner-icon="mdi-email" style="width: 100%" color="white"></v-text-field>
        </v-col>
        <v-col cols="12" md="2" class="mb-16">
        <router-link to="/"> <v-btn color="#4291F0" width="168" height="52" class="white--text">Get Started</v-btn></router-link>
      </v-col>
    </v-row>
    </v-img>
  </v-col>
</v-row>
<v-container>
  <v-row justify="center" align="center" class="mt-16 mb-16">
      <v-col cols="12" md="6" class="mt-16">
        <v-card class="mx-auto ml-16" outlined color="transparent">
          <v-card-text>
            <p class="text-h3 text--primary font-weight-bold">Download your shows to watch offline.</p>
            <div class="text-h5">Save your favorites easily and always have something to watch.</div>
          </v-card-text>
        <router-link to="/movies"> <v-btn color="#4291F0" width="168" height="40" class="white--text ml-4">WATCH NOW</v-btn></router-link>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-container>
          <v-img class="rounded-xl ml-16" lazy-src="https://picsum.photos/id/11/10/6" height="550" max-width="550" :src="require('../assets/moviee.jpg')"></v-img>
        </v-container>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-16 mb-16">
      <v-col cols="12" md="6">
        <v-container>
          <v-img class="rounded-xl ml-16" lazy-src="https://picsum.photos/id/11/10/6" height="550" max-width="550" :src="require('../assets/moviee.jpg')"></v-img>
        </v-container>
      </v-col>
      <v-col cols="12" md="6" class="mt-16">
        <v-card class="mx-auto mr-16" outlined color="transparent">
          <v-card-text>
            <p class="text-h3 text--primary font-weight-bold">Enjoy on your TV.</p>
            <div class="text-h5">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</div>
          </v-card-text>
        <router-link to="/Tvs"> <v-btn color="#4291F0" width="168" height="40" class="white--text ml-4">WATCH NOW</v-btn></router-link>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-card-text class="mt-16">
        <div class="text-h5 text-center">Ready to watch? Enter your email to create or restart your membership.</div>
      </v-card-text>
      <v-col cols="12" md="5" class="mb-16">
        <v-text-field v-model="email" outlined label="Email Address" prepend-inner-icon="mdi-email" style="width: 100%" color="white"></v-text-field>
        </v-col>
        <v-col cols="12" md="2" class="mb-16">
        <router-link to="/"> <v-btn color="#4291F0" width="168" height="52" class="white--text">Get Started</v-btn></router-link>
      </v-col>
    </v-row>

</v-container>
</div>
</template>

<script>
  
  export default {
    name: 'Home',
    components: {
    }

    
  }
</script>