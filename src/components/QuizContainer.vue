<template lang="html">
  <aside>
      <h2>THIS WILL BE THE QUIZ SECTION</h2>
      <quiz-questions :selectedQuestion='this.randomQuestion.question'></quiz-questions>
      <quiz-answers v-for="(answer, index) in this.allAnswers" :answer='answer' :key="index"></quiz-answers>
      <p>{{this.result}}</p>
      <button v-on:click="goLaunchpad" v-if="this.result">Back to the launchpad!</button>
  </aside>
</template>

<script>
import QuizQuestions from "./QuizQuestions.vue";
import QuizAnswers from "./QuizAnswers.vue";
import {eventBus} from "@/main.js"
export default {
  name: 'quiz-container',
  props: ['selectedPlanet', 'planets'],
  components: {
      'quiz-questions' : QuizQuestions,
      'quiz-answers' : QuizAnswers
  },
  data() {
    return {
      selectedAnswer: ""
    }
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
      return this.shuffle(answers)
    },
    result: function() {
      if(this.selectedAnswer){
      if(this.selectedAnswer === this.randomQuestion.answer){
        return true
        } else {
          return false
        }
      }
    }
  },
  methods: {
    getRandomQuestion: function() {
      const num = Math.floor((Math.random() * this.selectedPlanet.quiz.questions.length))
      return this.selectedPlanet.quiz.questions[num]
    },
    shuffle: function(array) {
      var j, x, i;
      for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
      return array;
    },
    goLaunchpad: function() {
      eventBus.$emit('go-launchpad')
    }
  },
  mounted() {
    eventBus.$on('selected-answer', (payload) => {
      this.selectedAnswer = payload
    })
    eventBus.$on('selected-planet', (payload) => {
      this.selectedAnswer = ""
    })
  }
}
</script>

<style lang="css" scoped>

aside{
  background-color: #243141;

  height: 30vh;
  color: red;
}

</style>