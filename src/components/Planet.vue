<template lang="html">
    <area @click="handleClick(planet)" :class='[planet.name, orbitClass]'>
    </area>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
    name: 'individual-planet',
    props:['planet', 'orbitClass'],

    data(){
        return{
            selectedPlanet: null
        }
    },

    methods: {
        handleClick: function(data){
            this.selectedPlanet = data
            eventBus.$emit('selected-planet', this.selectedPlanet)
        }
    }
}

</script>

<style lang='css' >

.Sun{
  background-color: #FB7209;
  box-shadow: 0 0 60px rgba(255, 160, 60, 0.4);
  z-index: 1;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/2k_sun.jpg);

  font-size: 24em;
}

.Sun .planet {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  margin-top: -.5em;
  margin-left: -.5em;
  border-radius: 50%;
}

.planet {
  background-color: #525151;
  background-repeat: no-repeat;
  background-size: cover;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.Mercury .planet{
  left: 0%;
  top: 50%;
}

.orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation-name: orbit;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.Mercury .orbit .planet{
  width: 12em;
  height: 12em;
  margin-top: -6em;
  margin-left: -6em; 
  animation-duration: 3s;
}

.myelement {
  animation: 'fader' 2s linear;
  animation-name: orbit;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes orbit {
  0%   { transform: rotateZ(0deg); }
  100% { transform: rotateZ(-360deg); }
}

.Sun {
    
}
.Mercury {
    font-size: 1em;  
}

</style>