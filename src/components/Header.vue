<template lang="html">
  <header>
    <h1>watch this space</h1>
    <!-- <svg id='nav-bar' viewBox="0 0 100 80" width="40" height="40">
    <rect width="100" height="15"></rect>
    <rect y="30" width="100" height="15"></rect>
    <rect y="60" width="100" height="15"></rect>
    </svg>   -->
  </header>
</template>

<script>
export default {
  name:'header-component'
}
</script>

<style lang="css" scoped>

header {
  display: flex;
  flex-flow: wrap row;
  justify-content:flex-start;
  background-color: #556272;
  margin: auto;

  font-size: 1.5em;
}

#nav-bar{
  justify-self: flex-end;
  padding: 5px;
}

h1 {
  font-size: 2em;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 20px;
  padding-left: 180px;
  text-shadow: 2px 2px 6px #243141;
}

</style>