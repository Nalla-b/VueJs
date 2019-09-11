<template>
  <div id="app">
    
    <List message="Faire les courses" type="checkbox"></List>
    <Task task="Acheter des légumes"></Task>
    <List message="Faire le ménage"></List>
  </div>
</template>

<script>
import List from './components/List.vue'
export default {
    name:"app",
    components : {
      List
    }
}


</script>

