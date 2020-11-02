<template lang="html">
  <section v-if='planet'>
      <hgroup>
          <p>{{planet.description}}</p>
          <h4>{{planet.name}} has {{planet.funFacts.moons}} moons.</h4>
          <h4>The length of year in {{planet.name}} is {{planet.yearLength}}</h4>
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