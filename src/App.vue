<template lang="html">
<main>
  <header-component />
  <!-- <h1>Watch This Space Frontend</h1> -->
  <solar-system :planets='planets'></solar-system>
  <launch-countdown :countdown='countdown'/>
  <launchpad v-if="!this.selectedPlanet && !this.takeQuiz" :countdown='countdown'/>
  <planet-fact-container v-if="!this.takeQuiz && this.selectedPlanet"  :selectedPlanet='selectedPlanet' />
  <quiz-container v-if="this.takeQuiz" :planets='planets' :selectedPlanet='selectedPlanet'/>
  <planet-reel v-if='planets.length' :planets='planets'></planet-reel>
  <footer-component />
</main>
</template>

<script>
import { eventBus } from "@/main.js";
import PlanetService from "./services/PlanetService.js";

import Header from "./components/Header.vue";
import SolarSystem from "./components/SolarSystem.vue";
import LaunchCountdown from "./components/LaunchCountdown.vue";

import Launchpad from "./components/Launchpad.vue";
import PlanetFactContainer from "./components/PlanetFactContainer";
import PlanetFact from "./components/PlanetFact.vue";

import QuizContainer from "./components/QuizContainer.vue";

import PlanetReel from "./components/PlanetReel.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'app',

  data(){
    return{
      planets: [],
      selectedPlanet: null,
      takeQuiz: false,
      countdown: 3
    }
  },

  components: {
    'header-component' : Header,
    'footer-component' : Footer,
    'planet-fact-container' : PlanetFactContainer,
    'planet-fact' : PlanetFact,
    'quiz-container' : QuizContainer,
    'planet-reel' : PlanetReel,
    'solar-system' : SolarSystem,
    'launchpad' : Launchpad,
    'launch-countdown' : LaunchCountdown
  },

  mounted(){
    this.fetchPlanets();

    eventBus.$on('selected-planet', payload => {
      this.selectedPlanet = payload;
      this.takeQuiz = false;
    })
    eventBus.$on('take-quiz', () => {
      this.takeQuiz = true
    })
    eventBus.$on('go-launchpad', () => {
      this.takeQuiz = false
      this.selectedPlanet = null
      this.countdown -= 1
    })
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

@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');



main{
  font-family: 'Luckiest Guy', cursive;
  color: #C6F65A;
}



</style>