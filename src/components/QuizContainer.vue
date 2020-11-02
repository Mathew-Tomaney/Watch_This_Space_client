<template lang="html">
  <aside>
      <h2>THIS WILL BE THE QUIZ SECTION</h2>
      <!-- <quiz-questions :selectedPlanet="selectedPlanet"></quiz-questions> -->
  </aside>
</template>

<script>
// import QuizQuestions from "./QuizQuestions.vue";

export default {
    name: 'quiz-container',
    props: ['selectedPlanet']

    // components: {
    //     'quiz-questions' : QuizQuestions
    // }

}
</script>

<style lang="css" scoped>

aside{
  background-color: #243141;
  height: 30vh;
}

</style>