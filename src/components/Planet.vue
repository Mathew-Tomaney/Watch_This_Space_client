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
  z-index: 1;
  background-repeat: repeat;
  background-size: cover;
  background-image: url(../assets/2k_sun.jpg);
  box-shadow: inset -25px -25px 50px rgba(0,0,0,.5);

  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  align-content: center;
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
}

.Saturn{
  z-index: 7;
  background-repeat: repeat;
  background-size: cover;
  background-image: url(../assets/2k_venus_surface.jpg);
  box-shadow: inset -5px -5px 10px rgba(0,0,0,.5);

  width: 0.45em;
  height: 0.45em;
  border-radius: 50%;
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
}

</style>