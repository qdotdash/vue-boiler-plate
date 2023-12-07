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
      name: 'default',
      path: ROUTES.DEFAULT,
      component: BaseLayout,
      children: [
        {
          name: 'test1',
          path: ROUTES.TEST1,
          component: TestView1
        },
        {
          name: 'test2',
          path: ROUTES.TEST2,
          component: TestView2
        }
      ]
    },
    {
      name: 'login',
      path: ROUTES.LOGIN,
      component: Login
    }
  ]
})

router.beforeEach(async (to) => {
  const isAuthenticated = !!localStorage.getItem('authToken')

  if (to.path === ROUTES.LOGIN && isAuthenticated) return ROUTES.DEFAULT

  if (to.path !== ROUTES.LOGIN && !isAuthenticated) return ROUTES.LOGIN
})

export default router
