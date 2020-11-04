<template lang="html">
    <div>
        <h2 v-on:click="handleClick()">{{answer}}</h2>
    </div>
</template>

<script>
import {eventBus} from "@/main.js"
export default {
    name: 'quiz-answers',
    props: ['answer'],
    methods: {
        handleClick: function(planet){            
            eventBus.$emit('selected-answer', this.answer)
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

</style>