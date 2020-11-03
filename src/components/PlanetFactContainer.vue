<template lang="html">
  <section>
    <h2>THIS WILL BE THE FUN FACTS SECTION</h2>
    <planet-fact :selectedPlanet="selectedPlanet" />
  </section>
</template>

<script>
import PlanetFact from "./PlanetFact.vue";

export default {
    name: 'planet-fact-container',
    props: ['selectedPlanet'],

    components: {
    'planet-fact' : PlanetFact
    }
}
</script>

<style lang="css" scoped>

section{
    background-color:#C64D56;
}
</style>