<template>
  <div class="container">
      <div class="todotask" type="checkbox">
          <li>
              {{task}}
              <input type="checkbox">
              </li>
      </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props : ['task']
};
</script>