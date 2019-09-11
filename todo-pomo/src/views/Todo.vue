<template>
  <div class="home">
    <List message="Faire les courses"></List>
    <List message="Faire le ménage"></List>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue'
export default {
    name:"Todo",
    components : {
      List
    }
}
</script>
