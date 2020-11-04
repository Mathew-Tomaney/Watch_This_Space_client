<template lang="html">
  <section >
    <!-- <h2>SOLAR SYSTEM ANIMATION</h2> -->
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
   background-image: url(../assets/pexels-photo-1146134.jpeg);
   height: 40vh;
   width: 100vw;
   background-position: center;
   background-size: cover;
   margin: 0px;
   font-size: 6em;
 }

 #galaxy {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  margin: auto;

  justify-content: center;
  align-content: center;
}





</style>