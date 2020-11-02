<template lang="html">
    <aside>
        <img :src="planet.img" alt="planet image" width="auto" height="250px"></img>
    </aside>
</template>

<script>
export default {
    name: 'individual-planet',
    props:['planet'],

    // data(){
    //     return{
    //         planetObject: {}
    //     }
    // }
}

</script>

<style lang='css'>

</style>