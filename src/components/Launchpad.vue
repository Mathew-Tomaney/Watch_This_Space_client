<template lang="html">
    <section>
        
            
        <h2>Hedgehog adventure time</h2>
        <div class="circular-sb">
            <p>Welcome Astronaut, help our rocket to launch - answer 5 questions correctly to get us home ! <br> Pick a planet to start the quiz...</p>
        
            <div class="circle1"></div>
            <div class="circle2"></div>
            </div>
    </section>
</template>

<script>
export default {
    name: 'launchpad'

}
</script>

<style lang="css">

section{
    background-color: #C6F65A;
    height: 45vh;
    margin: 0px;
    color: #556272;
}

.circular-sb {
  width: 350px;
  border: 5px solid #556272;
  padding: 80px 0px;
  margin: 30px auto;
  border-radius: 50%;
  text-align: center;
  font-size: 24px;
  font-weight: 900;
  /* font-family: arial; */
  position: relative;
  color: #556272;
}

.circle1 {
  border: 5px solid #556272;
  position: absolute;
  width: 25px;
  padding: 20px;
  border-radius: 50%;
  right: -15px;
  bottom: 23px;
}

.circle1:before {
  content: "";
  position: absolute;
  width: 25px;
  padding: 20px;
  border-radius: 50%;
  right: 0px;
  bottom: 0px;
  background: #C6F65A;
}

.circle2 {
  border: 5px solid #556272;
  position: absolute;
  width: 5px;
  padding: 10px 15px;
  border-radius: 50%;
  right: -60px;
  bottom: 5px;
}

</style>