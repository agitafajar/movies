<template>
   <div>
     <UpcomingMovies />
     <PopularMovies />
     <TopratedMovies />
     <NowPlaying />
   </div>
</template>

<script>
  
import PopularMovies from '../components/PopularMovies.vue'
import UpcomingMovies from '../components/UpcomingMovies.vue'
import TopratedMovies from '../components/TopratedMovies.vue'
import NowPlaying from '../components/NowPlaying.vue'
  export default {
    name: 'Home',
    components: {
    PopularMovies,
    UpcomingMovies,
    TopratedMovies,
    NowPlaying
    }
    
  }
</script>