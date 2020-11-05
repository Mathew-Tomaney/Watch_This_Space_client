<template lang="html">
  <section>
    <!-- <h2>THIS WILL BE THE PLANET IMAGE REEL</h2> -->
    <ul class="scroll-box">
        <img v-for='(planet, index) in planets' :key='index' :src="planet.img" alt="planet image"></img>
    </ul>
  </section>
</template>

<script>
export default {
    name: 'planet-reel',
    props: ['planets']
}
</script>

<style lang="css" scoped>

section{
    background-color: #C6F65A;
    height: 22vh;
    width: 100vw;
}

ul {
    list-style-type: none;
    width: 80vw;
}

img{
    /* width: 15vw; */
    height: 15vh;
    margin: 10px;
    padding: 0px;
    border-radius: 10px;
    align-content: center;

    /* cursor: pointer; */

}

.scroll-box{
    width: 95vw;
    height: 18vh;
    overflow: auto;
    white-space: nowrap;
    padding: 10px;
    margin: auto;

    align-content: center;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}

</style>