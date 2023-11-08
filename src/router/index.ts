import { createRouter, createWebHistory } from 'vue-router'

import BaseLayout from '@/layout/BaseLayout.vue'
import TestView1 from '@/views/TestView1.vue'
import TestView2 from '@/views/TestView2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BaseLayout,
      children: [
        {
          path: 'test1',
          name: 'test1',
          component: TestView1
        },
        {
          path: 'test2',
          name: 'test2',
          component: TestView2
        }
      ]
    }
  ]
})

export default router
