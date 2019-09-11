import Vue from "vue";

// importer le fichier app

import App from "./App.vue";

// permet de mettre le mode développement

Vue.config.productionTip = false;

let app = new Vue({
  render: h => h(App)
}).$mount("#app");
