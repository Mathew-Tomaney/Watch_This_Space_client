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

area:hover{
  transition: transform .2s;
}

.Sun{
  z-index: 1;
  background-repeat: repeat;
  background-size: cover;
  background-image: url(../assets/2k_sun.jpg);
  box-shadow: inset -25px -25px 50px rgba(0,0,0,.5);

  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
}

.Mercury{
  z-index: 2;
  background-repeat: repeat;
  background-size: cover;
  background-image: url(../assets/2k_mercury.jpg);
  box-shadow: inset -5px -5px 20px rgba(0,0,0,.5);
  
  width: 0.18em;
  height: 0.18em;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
}

.Venus{
  z-index: 3;
  background-repeat: repeat;
  background-size: cover;
  background-image: url(../assets/2k_venus_atmosphere.jpg);
  box-shadow: inset -5px -5px 10px rgba(0,0,0,.5);

  width: 0.3em;
  height: 0.3em;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
}

.Earth{
  z-index: 4;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/2k_earth_daymap.jpg);
  box-shadow: inset -5px -5px 10px rgba(0,0,0,.5);

  width: 0.3em;
  height: 0.3em;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
}

.Mars{
  z-index: 5;
  background-repeat: repeat;
  background-size: cover;
  background-image: url(../assets/2k_mars.jpg);
  box-shadow: inset -5px -5px 10px rgba(0,0,0,.5);

  width: 0.2em;
  height: 0.2em;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
}

.Jupiter{
  z-index: 6;
  background-repeat: repeat;
  background-size: cover;
  background-image: url(../assets/2k_jupiter.jpg);
  box-shadow: inset -5px -5px 10px rgba(0,0,0,.5);

  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
}

.Saturn{
  z-index: 7;
  background-repeat: repeat;
  background-size: cover;
  background-image: url(../assets/2k_saturn.jpg);
  box-shadow: inset -5px -5px 10px rgba(0,0,0,.5);

  width: 0.45em;
  height: 0.45em;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
}

.Uranus{
  z-index: 8;
  background-repeat: repeat;
  background-size: cover;
  background-image: url(../assets/2k_uranus.jpg);
  box-shadow: inset -5px -5px 10px rgba(0,0,0,.5);

  width: 0.25em;
  height: 0.25em;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
}

.Neptune{
  z-index: 9;
  background-repeat: repeat;
  background-size: cover;
  background-image: url(../assets/2k_neptune.jpg);
  box-shadow: inset -5px -5px 5px rgba(0,0,0,.5);

  width: 0.2em;
  height: 0.2em;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
}

.orbit {
    transform-style: preserve-3d;
    animation-name: rotation;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}


@keyframes bounce {
    0% {
        top: 0px
    }

    50% {
        top: 25px;
        bottom: 50px;
        height: 5vh;
    }
    100% {
        top: 0px;
    }
}

</style>