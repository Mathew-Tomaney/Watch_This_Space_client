<template lang="html">
  <aside>
      <h2>THIS WILL BE THE QUIZ SECTION</h2>
      <quiz-questions :selectedQuestion='this.selectedQuestion'></quiz-questions>
      <!-- <button :on-click="this.getRandomQuestion">BUTTON</button> -->
  </aside>
</template>

<script>
import QuizQuestions from "./QuizQuestions.vue";

export default {
    name: 'quiz-container',
    props: ['selectedPlanet', 'planets'],

    components: {
        'quiz-questions' : QuizQuestions
    },

    data () {
      return {
        selectedQuestion: this.getRandomQuestion(),
      }
    },

    // computed: {
    //   randomQuestion: function () {
    //     return this.getRandomQuestion()
    //   }
    // },

    methods: {
      getRandomQuestion: function() {
        const num = Math.floor((Math.random() * this.selectedPlanet.quiz.questions.length))
        return this.selectedPlanet.quiz.questions[num].question
      }
    }

}
</script>

<style lang="css" scoped>

aside{
  background-color: #243141;
  height: 30vh;
}

</style>