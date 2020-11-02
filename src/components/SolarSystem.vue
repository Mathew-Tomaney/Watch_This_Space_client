<template lang="html">
  <section>
    <h2>SOLAR SYSTEM ANIMATION</h2>
    <planet v-for='(planet, index) in planets' :key='index' :planets="planets" :class='planet.name'></planet>
  </section>
</template>

<script>
import Planet from "@/component/Planet.vue";

export default {
    name: 'solar-system',
    props: ['planets'],

    component:{
      'planet' : Planet
    }
}
</script>

<style lang="css" scoped>


</style>