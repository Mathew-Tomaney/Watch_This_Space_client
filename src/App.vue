<template lang="html">
<main>
  <header-component />
  <h1>Watch This Space Frontend</h1>
  <footer-component />
</main>
</template>

<script>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'app',

  components: {
    'header-component' : Header,
    'footer-component' : Footer
  }
}
</script>

<style lang="css">


</style>