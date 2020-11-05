<template>
    <section>
        <h2 v-if="countdown>0">Countdown to launch: </h2>
        <span  class="count-down" v-if="countdown>0">{{countdown}} </span>
        <span class="blast-off" v-if="countdown<=0">Blast-off! Well done Astronaut! Keep exploring the planets or prepare for another launch:</span>
        <button v-if="countdown<=0" v-on:click="refresh()">Start a new Mission</button>
    </section>
</template>

<script>
export default {
    name: 'launch-countdown',
    props: ['countdown'],

    methods: {
        refresh: function() {
            window.location.reload()
        }
    }
}
</script>

<style lang="css" scoped>

section {
    display: flex;
    height: 10vh;
    background-color: #ff6a66;
    color: #47cdc6;

}

h2 {
  font-size: 2em;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 40px;
  padding-left: 90px;
  text-shadow: 2px 2px 6px #243141;
}

.count-down { 
  font-size: 5em;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 30px;
  padding-left: 50px;
  text-shadow: 2px 2px 6px #243141;
}

.blast-off{
  font-size: 1.5em;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 30px;
  padding-left: 20px;
  text-shadow: 2px 2px 6px #243141;
}

button{
  font-family: 'Luckiest Guy', cursive;
  padding: 10px;
  width: 20vw;
  margin: auto;
  border-radius: 20px;
  font-size: 1em;
  color: #243141;
  background-color: #C6F65A;
  transition: all 0.5s;
  cursor: pointer;
}

</style>