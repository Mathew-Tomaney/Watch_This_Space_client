<template lang="html">
  <section>
    <h2>THIS WILL BE THE PLANET IMAGE REEL</h2>
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
    
}

ul {
    list-style-type: none;
}

img{
    width: 15vw;
    margin: 10px;
    cursor: pointer;
    border-radius: 10px;
    align-content: center;
}

.scroll-box{
    width: 100vw;
    height: 40vh;
    overflow: auto;
    white-space: nowrap;
    padding: 10px;
}

</style>