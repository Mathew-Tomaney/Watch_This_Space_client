<template lang="html">
  <aside>
      <h2>THIS WILL BE THE QUIZ SECTION</h2>
      <quiz-form></quiz-form>
      <quiz-questions></quiz-questions>
  </aside>
</template>

<script>
// import QuizForm from "./components/QuizForm.vue";
// import QuizQuestions from "./components/QuizQuestions.vue";

export default {
    name: 'quiz-container',

    // components: {
    //     'quiz-form' : QuizForm,
    //     'quiz-questions' : QuizQuestions
    // }

}
</script>

<style lang="css" scoped>

aside{
  background-color: #243141;
}

</style>