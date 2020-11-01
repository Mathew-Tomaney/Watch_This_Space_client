<template lang="html">
<main>
  <header-component />
  <h1>Watch This Space Frontend</h1>
  <footer-component />
</main>
</template>

<script>

import Header from "./components/Header.vue";
// import SolarSystem from "./components/SolarSystem.vue";
import PlanetFactsContainer from "./components/PlanetFactsContainer.vue";
import QuizContainer from "./components/QuizContainer.vue";
import PlanetReel from "./components/PlanetReel.vue";
import Footer from "./components/Footer.vue";


export default {
  name: 'app',

  components: {
    'header-component' : Header,
    'footer-component' : Footer,
    'planet-facts-container' : PlanetFactsContainer,
    'quiz-container' : QuizContainer,
    'planet-reel' : PlanetReel
  }
}
</script>

<style lang="css">


</style>