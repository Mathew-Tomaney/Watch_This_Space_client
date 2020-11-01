<template lang="html">
<main>
  <header-component></header-component>
  <h1>Watch This Space Frontend</h1>
</main>
</template>

<script>

import Header from "./components/Header.vue";

export default {
  name: 'app',

  components: {
    'header-component' : Header
  }
}
</script>

<style lang="css">

</style>