import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../components/TodoList.vue' 
import Hello from '../components/Hello.vue' 

const routes = [
  {
    path: '/todo',
    name: 'ToDo',
    component: TodoList 
  },
  {
    path: '/',
    name: 'Hello',
    component: Hello
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router