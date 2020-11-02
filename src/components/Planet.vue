<template lang="html">
    <aside>
        <img :planet='planet' :src="planet.img" alt="planet image"></img>
    </aside>
</template>

<script>
export default {
    name: 'planet',
    props:['planet'],

    data(){
        return{
            planet: {}
        }
    }
}

</script>

<style lang='css'>

</style>