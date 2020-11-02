<template lang="html">
  <section>
    <h2>THIS WLL BE THE FUN FACTS SECTION</h2>
    <planet-fact></planet-fact>
  </section>
</template>

<script>
import PlanetFact from "./components/PlanetFact.vue";

export default {
    name: 'planet-fact-container',
    props: ['planets']

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