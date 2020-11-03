<template lang="html">
    <div>
        <h3>{{selectedPlanet.quiz.questions[0].question}}</h3>
        ul
    </div>
</template>

<script>

export default {
    name: 'quiz-questions',
    props: ['planets', 'selectedPlanet']




}

</script>

<style lang="css" scoped>

h3 {
    color: white;
}

</style>