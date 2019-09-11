<template>
  <div class="home">
    <h1>{{heading}}</h1>
    <div class="container1">
      <Card title="Wesh ALors" @send-title="getTitle"></Card>
    <Card title="JUJUJUL AU MIC" @send-title="getTitle"></Card>
    <Card title="Trahi pas la honda" @send-title="getTitle"></Card>
    {{count}} <button @click="startTimer">Démarrermon compteur</button>
    </div>    
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card'

export default {
  name: 'home',
  components: {
    Card
  },
  data: function(){
return{
  heading: "Mon titre",
  count: 0,
  interval: null
}
  },
  methods:{
  increaseTimer: function(){
    this.count++;
  } ,
    startTimer: function() {
      clearInterval(this.interval);
      this.count = 0 ;
      setInterval(this.increaseTimer, 1000)
    },
    getTitle: function (title) {
      this.heading = title;
    }
  }
}
</script>

<style>
.container1{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
}

.home{
  text-align: center;
}
</style>
