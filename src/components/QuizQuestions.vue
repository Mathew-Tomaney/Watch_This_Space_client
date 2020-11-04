<template lang="html">
    <div>
        <h2>{{selectedQuestion}}</h2>
    </div>
</template>

<script>
export default {
    name: 'quiz-questions',
    props: ['selectedQuestion'],
}
</script>

<style lang="css" scoped>

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  text-align: center;
  display: block;
  background-color: white;
  color: #243141;
  border-radius: 10px;
  border-color: #47CDC6;
  border-style: solid;
  padding: 10px;
  margin: 10px;
  /* margin-top: 80px; */
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}
</style>