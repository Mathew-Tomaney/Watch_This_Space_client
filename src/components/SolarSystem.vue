<template lang="html">
  <section>
    <!-- <h2>SOLAR SYSTEM ANIMATION</h2> -->
    <div id="galaxy">
    <individual-planet v-for='(planet, index) in planets' :key='index' :planet="planet" :class="planet.name"></individual-planet>
    </div>
  </section>
</template>

<script>
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

 /* #galaxy {
  position: relative;
  width: 100%;
  height: 100%;
}

 .sun {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  margin-top: -.5em;
  margin-left: -.5em;
  border-radius: 50%;
  background-color: #FB7209;
  box-shadow: 0 0 60px rgba(255, 160, 60, 0.4);
  z-index: 1;
} */

</style>