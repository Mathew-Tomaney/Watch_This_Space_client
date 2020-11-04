<template>
    <section>
        <h2>Countdown to launch: </h2>
        <span v-if="countdown>0">{{countdown}} </span>
        <span v-if="countdown<=0">Blast-off! Well done Astronaut! Keep exploring the planets or prepare for another launch:</span>
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

<style>

</style>