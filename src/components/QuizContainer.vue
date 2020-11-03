<template lang="html">
  <aside>
      <h2>THIS WILL BE THE QUIZ SECTION</h2>
      <quiz-questions :selectedQuestion='this.randomQuestion.question'></quiz-questions>
      <quiz-answers v-for="(answer, index) in this.allAnswers" :answer='answer' :key="index"></quiz-answers>
      <!-- <button :on-click="this.getRandomQuestion">BUTTON</button> -->
  </aside>
</template>

<script>
import QuizQuestions from "./QuizQuestions.vue";
import QuizAnswers from "./QuizAnswers.vue";
export default {
    name: 'quiz-container',
    props: ['selectedPlanet', 'planets'],
    components: {
        'quiz-questions' : QuizQuestions,
        'quiz-answers' : QuizAnswers
    },
    computed: {
      randomQuestion: function () {
        return this.getRandomQuestion()
      },
      allAnswers: function () {
        const answers = []
        answers.push(this.randomQuestion.answer)
        for (const wrongAnswer of this.randomQuestion.wrong) {
          answers.push(wrongAnswer)
        }
        return answers
      }
    },
    methods: {
      getRandomQuestion: function() {
        const num = Math.floor((Math.random() * this.selectedPlanet.quiz.questions.length))
        return this.selectedPlanet.quiz.questions[num]
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