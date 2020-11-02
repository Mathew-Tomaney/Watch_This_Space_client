<template lang="html">
  <section>
    <h2>SOLAR SYSTEM ANIMATION</h2>
    <ul class="scroll-box">
        <img v-for='(planet, index) in planets' :key='index' :src="planet.img" alt="planet image"></img>
    </ul>
  </section>
</template>

<script>
export default {
    name: 'solar-system',
    props: ['planets']
}
</script>

<style lang="css" scoped>

img{
    width: 15vw;
    margin: 10px;
    cursor: pointer;
    border-radius: 10px;
    align-content: center;
}

</style>