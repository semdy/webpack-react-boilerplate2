import AsyncComponent from '@/components/AsyncComponent'

export default [
  // app
  {
    path: '/',
    requireAuth: true,
    component: AsyncComponent(() => import('../layouts/BasicLayout')),
    routes: [
      { path: '/', redirect: '/todoList' },
      {
        path: '/todoList',
        exact: true,
        component: AsyncComponent(() => import('./TodoList/TodoList'))
      },
      {
        path: '/animate',
        component: AsyncComponent(() => import('./animate/animate'))
      }
    ]
  }
]
