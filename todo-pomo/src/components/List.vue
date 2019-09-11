<template>
    <div class="container1">
        <div class="list">
            {{message}}
            <ul>
                <Task v-for="value in items" :key="value">{{ value.itemss }}</Task>          
                <textarea></textarea>
                <button @click="addTask">Ajouter</button>

            </ul>
        </div>
    </div>
</template>
<script>
import Task from './Task'
export default {
    name: "List",
    props : ['message'],
    components : {
        Task
    },
    data: function()
    {
        return {
            items: [
                {itemss:'Mange moi les couilles'},
                {itemss:'Mange moi les groseilles'},
                {itemss:'Mange moi les pruneaux'}
            ]
        }
    },
  methods: {
    addTask: function()
    {
      this.items.push({item:'Mange moi les abricots'})
    }
  }   
}
</script>

<style>
    .container1{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border: 2px solid black;
        width: 15%;
        margin:0 auto;
        margin-top: 50px;
        font-size: 1.1em;
        text-align: center;
    }
</style>
