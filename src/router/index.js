import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../components/pages/TodoList.vue' 
import Hello from '../components/pages/Hello.vue' 
import Calendar from '@/components/pages/Calendar.vue'

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
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router