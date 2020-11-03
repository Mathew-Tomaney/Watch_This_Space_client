<template lang="html">
    <aside>
        <img @click="handleClick(planet)" :src="planet.img" alt="planet image" width="auto" height="250px"></img>
    </aside>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
    name: 'individual-planet',
    props:['planet'],

    data(){
        return{
            selectedPlanet: null
        }
    },

    methods: {
        handleClick: function(planet){
            this.selectedPlanet = planet
            
            eventBus.$emit('selected-planet', this.selectedPlanet)
        }
    }
}

</script>

<style lang='css'>

</style>