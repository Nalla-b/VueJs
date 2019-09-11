<template>
    <div id="app">
        <h1>Coucou les gens</h1>
        <Alert message = "Mon message pt"></Alert>
    </div>
</template>

<script>
// ca permet au main.js de récupérer le code de ce script
import Alert from './components/Alert.vue'
export default {
    name:"app",
    components : {
        Alert
    }
}
</script>
