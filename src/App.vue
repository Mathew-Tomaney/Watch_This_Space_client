<template lang="html">
<main>
  <header-component />
  <h1>Watch This Space Frontend</h1>
  <solar-system v-if='planets.length' :planets='planets'></solar-system>
  <planet-fact-container :planets='planets' />
  <!-- <quiz-container></quiz-container> -->
  <planet-reel v-if='planets.length' :planets='planets'></planet-reel>
  <footer-component />
</main>
</template>

<script>
import PlanetService from "./services/PlanetService.js";

import Header from "./components/Header.vue";
import SolarSystem from "./components/SolarSystem.vue";
import PlanetFactContainer from "./components/PlanetFactContainer";
import PlanetFact from "./components/PlanetFact.vue";
import QuizContainer from "./components/QuizContainer.vue";
import PlanetReel from "./components/PlanetReel.vue";
import Footer from "./components/Footer.vue";


export default {
  name: 'app',

  data(){
    return{
      planets: []
  }
  },

  components: {
    'header-component' : Header,
    'footer-component' : Footer,
    'planet-fact-container' : PlanetFactContainer,
    'planet-fact' : PlanetFact,
    'quiz-container' : QuizContainer,
    'planet-reel' : PlanetReel,
    'solar-system' : SolarSystem
  },

  mounted(){
    this.fetchPlanets();
  },

  methods: {
    fetchPlanets(){
      PlanetService.getPlanets()
      .then(planets => this.planets = planets)
    }
  }
}
</script>

<style lang="css">


</style>