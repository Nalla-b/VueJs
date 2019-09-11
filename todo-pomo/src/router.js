import Vue from 'vue'
import Router from 'vue-router'
import Todo from './views/Todo.vue'
import Pomodoro from './views/Pomodoro.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo
    },
    {
      path: '/pomodoro',
      name: 'pomodoro',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Pomodoro
    }
  ]
})
