<template lang="html">
    <div>
    <h2>{{selectedQuestion}}</h2>
    </div>
</template>

<script>

export default {
    name: 'quiz-questions',
    props: ['selectedQuestion'],
}

</script>

<style lang="css" scoped>

h3 {
    color: white;
}

</style>