<template>
   <div>
     <PopularTvShow />
     <TopRatedTvShow />
     <OnTheAirTvShow />
     <AiringTodayTv />
   </div>
</template>

<script>
  
import PopularTvShow from '../components/PopularTvShow.vue'
import TopRatedTvShow from '../components/TopRatedTvShow.vue'
import OnTheAirTvShow from '../components/OnTheAirTvShow.vue'
import AiringTodayTv from '../components/AiringTodayTv.vue'

  export default {
    name: 'Home',
    components: {
    PopularTvShow,
    TopRatedTvShow,
    OnTheAirTvShow,
    AiringTodayTv,
    }
    
  }
</script>