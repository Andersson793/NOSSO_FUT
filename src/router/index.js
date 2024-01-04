import { createRouter, createWebHistory } from 'vue-router';
import BrasileiraoVue from '@/pages/Brasileirao.vue';
import TermoDeUsoVue from '@/pages/TermoDeUso.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Brasileirao',
      component: BrasileiraoVue
    },
    {
      path: '/termo',
      name: 'termo de uso',
      component: TermoDeUsoVue
    }
  ]
})

export default router