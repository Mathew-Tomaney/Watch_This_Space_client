<template lang="html">
  <section >
    <!-- <h2>SOLAR SYSTEM ANIMATION</h2> -->
    <div id="universe">
      <div id="galaxy">
        <individual-planet v-for='(planet, index) in planets' :key='index' :planet="planet" :orbitClass="planet.isPlanet ? 'orbit' : ''"></individual-planet>
      </div>
    </div>
  </section>
</template>

<script>
import { eventBus } from "@/main.js";
import Planet from "@/components/Planet.vue";

export default {
    name: 'solar-system',
    props: ['planets'],
    components:{
      'individual-planet': Planet
    }
}
</script>

<style lang="css" scoped>

 section {
   background-image: url(../assets/2k_stars_milky_way.jpg);
   height: 55vh;
   width: 100vw;
   background-position: center;
   background-size: cover;
   margin: 0px;
 }
 
 #universe {
  z-index: 1;
  position: absolute;
  overflow: hidden;
  height: 55vh;
  width: 100vw;
  background-position: center 40%;
  background-repeat: no-repeat;
  background-size: cover; 
}

 #galaxy {
  position: relative;
  width: 100%;
  height: 100%;
}



</style>