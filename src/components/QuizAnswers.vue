<template lang="html">
    <div>
        <h2>{{answer}}</h2>
    </div>
</template>

<script>

export default {
    name: 'quiz-answers',
    props: ['answer'],
}

</script>

<style lang="css" scoped>

h3 {
    color: white;
}

</style>