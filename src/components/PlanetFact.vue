<template lang="html">
  <aside>
    <section v-if='selectedPlanet'>
      <hgroup>
        <p>{{selectedPlanet.description}}</p>
        <h4>{{selectedPlanet.name}} has {{selectedPlanet.funFacts.moons}} moon<span v-if="selectedPlanet.funFacts.moons > 1 || selectedPlanet.funFacts.moons <= 0">s</span>.</h4>
        <h4>One year on {{selectedPlanet.name}} is {{selectedPlanet.funFacts.yearLength}}</h4>
        <h4 v-if="selectedPlanet.funFacts.oneEarthDay">One day lasts for {{selectedPlanet.funFacts.oneEarthDay}}.</h4>
        <h4>Gravity on {{selectedPlanet.name}} is {{selectedPlanet.funFacts.gravity}}</h4>
        <h4>{{selectedPlanet.name}} is a<span v-if="selectedPlanet.funFacts.planetType.charAt(0) === 'I'">n</span> {{selectedPlanet.funFacts.planetType}} type planet.</h4>
        <h4>Temperature on {{selectedPlanet.name}} is {{selectedPlanet.funFacts.temperature}}</h4>
      </hgroup>
      <img :src="selectedPlanet.img" alt="planet image" />
      <button v-on:click="takeQuiz">Take a Quiz!</button>
    </section>
  </aside>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
    name: 'planet-fact',
    props: ['selectedPlanet'],

    methods: {
      takeQuiz: function() {
        eventBus.$emit('take-quiz')
      },
    }
}
</script>


<style lang="css" scoped>

aside{
    background: #47CDC6;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.4);
    width: 80vw;
    height: 35vh;
    border-radius: 20px;
    margin: auto;
    align-content: center;
    font-family: Arial, Helvetica, sans-serif;
    color: #243141;
}

h4 {
  display: block;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  margin-left: 10px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

section{
    display: grid;
    grid-template-columns: 60% 40%;
    margin: auto;
    
}

p {
  display: block;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  margin-left: 10px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

img{
  width: 15vw;
  height: 15vh;
  margin: 10px;
  border-radius: 10px;
}

button {
  font-family: 'Luckiest Guy', cursive;
  padding: 10px;
  width: 20vw;
  margin: auto;
  border-radius: 20px;
  font-size: 1em;
  color: #C6F65A;
  background-color: #C64D56;
}

</style>