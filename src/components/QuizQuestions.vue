<template lang="html">
    <div>
        {{selectedPlanet.name}}
    </div>
</template>

<script>
export default {
    name: 'quiz-questions',
    props: ['planets', 'selectedPlanet']

}
</script>

<style lang="css" scoped>

</style>