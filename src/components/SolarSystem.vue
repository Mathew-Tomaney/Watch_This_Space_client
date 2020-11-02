<template lang="html">
  <section>
    <h2>SOLAR SYSTEM ANIMATION</h2>
    <individual-planet v-for='(planet, index) in planets' :key='index' :planet="planet" :class="planet.name"></individual-planet>
  </section>
</template>

<script>
import Planet from "@/components/Planet.vue";

export default {
    name: 'solar-system',
    props: ['planets'],
    component:{
      'individual-planet': Planet
    }
}
</script>

<style lang="css" scoped>


</style>