import AsyncComponent from "@/components/AsyncComponent"

export default [
  {
    path: "/",
    component: AsyncComponent(() => import(/* webpackChunkName: "BasicLayout" */ "./layouts/BasicLayout")),
    routes: [
      { path: '/', redirect: '/todoList' },
      {
        path: "/todoList",
        exact: true,
        component: AsyncComponent(() => import(/* webpackChunkName: "TodoList" */ "./pages/TodoList/TodoList"))
      },
      {
        path: "/test",
        component: AsyncComponent(() => import(/* webpackChunkName: "Test" */ "./pages/Test/Test")),
      },
      {
        path: "/animate",
        component: AsyncComponent(() => import(/* webpackChunkName: "animate" */ "./pages/animate/animate")),
      },
      {
        path: "/notfound",
        component: AsyncComponent(() => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound/NotFound"))
      }
    ]
  }
]
