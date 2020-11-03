<template lang="html">
  <aside>
      <section v-if='selectedPlanet'>
        <hgroup>
          <p>{{selectedPlanet.description}}</p>
          <h4>{{selectedPlanet.name}} has {{selectedPlanet.funFacts.moons}} moons.</h4>
          <h4>The length of year in {{selectedPlanet.name}} is {{selectedPlanet.funFacts.yearLength}}</h4>
        </hgroup>
      <img :src="selectedPlanet.img" alt="planet image" />
    </section>
  </aside>
</template>

<script>
export default {
    name: 'planet-fact',
    props: ['selectedPlanet'],

    // data(){
    //     return{
    //         planetObject: null
    //     }
    // }
}
</script>

<style lang="css" scoped>

aside{
    background: #47CDC6;
    width: 30vw;
    height: 20vh;
    border-radius: 20px;
    margin: 40px;
}

section{
    display: grid;
    grid-template-columns: 50% 50%;
    margin: auto;
    
}

img{
  width: 15vw;
  height: 15vh;
  margin: 10px;
  border-radius: 10px;
}

</style>