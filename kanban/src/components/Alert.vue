<template>
  <div class="alert" @click= "reverseMessage" :class="{'alert-secondary': change,'alert-primary':!change}">{{help}} {{message}}</div>
</template>


<script>
export default {
  name: "Alert",
  props : ['message','class'],
  data : function(){
      return{
          help : "Besoin d'aide?",
          change: true
      }
  },
  methods: {
    reverseMessage: function () {
      this.change =!  this.change;
    }
  }
};
</script>

<style lang="scss">

.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
}

.alert-primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}

.alert-secondary{
    color:purple;
    background-color: greenyellow;
    border-color:green;
}
</style>