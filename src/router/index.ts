import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/Login.vue'
import BaseLayout from '@/layout/BaseLayout.vue'
import TestView1 from '@/views/TestView1.vue'
import TestView2 from '@/views/TestView2.vue'
import { ROUTES } from '@/constants/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      ...ROUTES.DEFAULT,
      component: BaseLayout,
      children: [
        {
          ...ROUTES.TEST1,
          component: TestView1
        },
        {
          ...ROUTES.TEST2,
          component: TestView2
        }
      ]
    },
    {
      ...ROUTES.LOGIN,
      component: Login
    }
  ]
})

export default router
