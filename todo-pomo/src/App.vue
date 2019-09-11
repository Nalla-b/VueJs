<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Todo</router-link> |
      <router-link to="/pomodoro">Pomodoro</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>
export default {
    name:"app",
}
</script>

<style>
  #nav {
    text-align: center;
    font-size: 1.5em;
  }

  
</style>



