<template lang="html">
  <aside>
      <section v-if='planet'>
        <hgroup>
          <p>{{planet.description}}</p>
          <h4>{{planet.name}} has {{planet.funFacts.moons}} moons.</h4>
          <h4>The length of year in {{planet.name}} is {{planet.funFacts.yearLength}}</h4>
        </hgroup>
      <img :src="planet.img" alt="planet image" />
    </section>
  </aside>
</template>

<script>
export default {
    name: 'planet-fact',
    props: ['planet'],

    data(){
        return{
            planet: []
        }
    }
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