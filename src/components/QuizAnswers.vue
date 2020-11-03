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

h3 {
    color: white;
}

</style>