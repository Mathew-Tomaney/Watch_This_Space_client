<template lang="html">
  <aside>
    <section v-if='selectedPlanet'>
      <hgroup>
        <p>{{selectedPlanet.description}}</p>
        <h4>{{selectedPlanet.name}} has {{selectedPlanet.funFacts.moons}} moons.</h4>
        <h4>The length of year in {{selectedPlanet.name}} is {{selectedPlanet.funFacts.yearLength}}</h4>
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
      }
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
}

img{
  width: 15vw;
  height: 15vh;
  margin: 10px;
  border-radius: 10px;
}

</style>