<template lang="html">
    <div>
        <h2 :class="isCorrect" v-on:click="handleClick()">{{answer}}</h2>
    </div>
</template>

<script>
import {eventBus} from "@/main.js"
export default {
    name: 'quiz-answers',
    props: ['answer', 'result', 'correctAnswer', 'highlight', 'selectedAnswer'],
    methods: {
        handleClick: function(planet){            
            eventBus.$emit('selected-answer', this.answer)
        }
    },
    computed: {
        isCorrect: function(){
            if ((this.answer === this.selectedAnswer)) {
                return (this.answer === this.correctAnswer) ? "correct" : "wrong"
            }
        }
    }
}
</script>

<style lang="css" scoped>

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  text-align: center;
  display: block;
  background-color: white;
  color: #243141;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  margin-top: 30px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

.correct {
  background-color: #C6F65A;
}

.wrong {
    background-color: #C64D56;
}

</style>