<template lang="html">
  <section v-if='planet'>
      <hgroup>
          <p>{{planet.description}}</p>
          <h4>{{planet.funFacts.moons}}</h4>
      </hgroup>
  </section>
</template>

<script>
export default {
    name: 'planet-fact',
    props: ['planet']
}
</script>

<style lang="css" scoped>

</style>