<template>
    <div class="container">
        <div class="card">
        <h1 class="card__title">{{title}}</h1>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magnam.</p>
        <button class="card__button" @click="changeTitle">En savoir plus</button>
    </div>
    </div>
</template>

<script>
export default {
    name : "Card",
    props : ['title'],
    methods: {
        changeTitle: function (){
            this.$emit('send-title',this.title)
        }
    }
}
</script>

<style>
.card{
    border: solid black 2px;
    background-color: coral;
    display: flex;
    flex-direction: column;
}

.card__button{
    background-color: yellow;
}
</style>