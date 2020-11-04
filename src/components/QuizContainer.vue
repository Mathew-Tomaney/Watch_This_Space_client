<template lang="html">
  <aside>
      <h2>{{selectedPlanet.name}} quiz!</h2>
      <section>
        <quiz-questions :selectedQuestion='this.randomQuestion.question'></quiz-questions>
        <quiz-answers v-for="(answer, index) in this.allAnswers" :answer='answer' :key="index"></quiz-answers>
        <p>{{this.result}}</p>
        <button v-on:click="goLaunchpad" v-if="this.result">Back to the launchpad!</button>
      </section>
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

aside {
  background-color: #243141;

  height: 45vh;
  color: white;
  margin: 0px;
}

section {
    background: #ff6a66;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.4);
    width: 80vw;
    height: 35vh;
    border-radius: 20px;
    margin: auto;
    align-content: center;
    justify-items: center;
}

h2 {
  font-size: 4em;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 20px;
  padding-left: 80px;
  text-shadow: 2px 2px 6px #090b0f;
  color: #C6F65A;
}

quiz-questions{
  margin-top: 20px;
}


</style>