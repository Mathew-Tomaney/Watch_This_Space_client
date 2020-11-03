<template lang="html">
  <aside>
      <h2>THIS WILL BE THE QUIZ SECTION</h2>
      <quiz-questions :selectedQuestion='this.randomQuestion.question'></quiz-questions>
      <quiz-answers v-on:click="this.checkAnswer(answer)" v-for="(answer, index) in this.allAnswers" :answer='answer' :key="index"></quiz-answers>
      <p>{{this.result}}</p>
      <!-- <button :on-click="this.getRandomQuestion">BUTTON</button> -->
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
        return answers
      },
      result: function() {
        if(this.selectedAnswer){
        if(this.selectedAnswer === this.randomQuestion.answer){
          return "Correct"
          } else {
            return "Incorrect"
          }
        }
      }
    },
   

    methods: {
      getRandomQuestion: function() {
        const num = Math.floor((Math.random() * this.selectedPlanet.quiz.questions.length))
        return this.selectedPlanet.quiz.questions[num]
      },
      checkAnswer: function(answerToCheck) {
        if (answerToCheck === this.randomQuestion.answer) {
          this.result = "Correct"
        }
        else {
          this.result = "Incorrect"
        }
        console.log("hi")
      }
    },
    mounted() {
      eventBus.$on('selected-answer', (payload) => {
        this.selectedAnswer = payload
      })
    }
}
</script>

<style lang="css" scoped>

aside{
  background-color: #243141;
  height: 30vh;
}

</style>