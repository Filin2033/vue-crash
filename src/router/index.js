import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue' // Импортируем компонент App
import Hello from '../components/Hello.vue' 

const routes = [
  {
    path: '/todo',
    name: 'ToDo',
    component: App 
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