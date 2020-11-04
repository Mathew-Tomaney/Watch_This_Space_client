<template lang="html">
  <section>
    <h2>{{selectedPlanet.name}}</h2>
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
    height: 48vh;
    margin: 0px;
}

h2 {
  font-size: 4em;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 20px;
  padding-left: 90px;
  text-shadow: 2px 2px 6px #243141;
}
</style>