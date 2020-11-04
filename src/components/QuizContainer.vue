<template lang="html">
  <aside>
      <h2>{{selectedPlanet.name}} quiz!</h2>
      <section>
        <div class='question-container'>
        <quiz-questions :selectedQuestion='this.randomQuestion.question'></quiz-questions>
        <quiz-answers v-for="(answer, index) in allAnswers" :selectedAnswer="selectedAnswer" :answer='answer' :key="index" :correctAnswer="randomQuestion.answer"></quiz-answers>
        </div>
        <button v-on:click="goLaunchpad" v-if="correct">Back to the launchpad!</button>
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
      selectedAnswer: null
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
    correct: function () {
      return this.randomQuestion.answer === this.selectedAnswer
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

  height: 48vh;
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
.question-container{
  padding-top: 20px;
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

button {
  display: block;
  font-family: 'Luckiest Guy', cursive;
  padding: 10px;
  width: 40vw;
  margin-top: 10px;
  margin: auto;
  letter-spacing: 2pt;
  border-radius: 20px;
  font-size: 1em;
  color: #ffffff;
  background-color: #47cdc6;
  
}

.true {
  background-color: #C6F65A;
}

</style>