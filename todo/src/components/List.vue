<template>
    <div class="container1">
        <div class="list">
            <ul>
                {{message}}
                <Task task="Acheter des pates"></Task>
                <Task task="Achter du pain"></Task>
                <textarea></textarea>

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
    data : function(){
        return{
            task : "Laver les chiottes"
        }
    }
}
</script>
