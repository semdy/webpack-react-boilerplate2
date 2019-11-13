// import React from 'react'
// import renderRoutes from '@/utils/renderRoutes'

// const routes = [
//   {
//     component: require(/* webpackChunkName: "BasicLayout" */ "../layouts/BasicLayout")
//     routes: [
//       {
//         path: "/todoList",
//         exact: true,
//         component: () => import(/* webpackChunkName: "TodoList" */ "./TodoList/TodoList")
//       },
//       {
//         path: "/test",
//         component: () => import(/* webpackChunkName: "Test" */ "./Test/Test"),
//       },
//       {
//         path: "/animate",
//         component: () => import(/* webpackChunkName: "animate" */ "./animate/animate"),
//       },
//       {
//         path: "/notfound",
//         component: () => import(/* webpackChunkName: "NotFound" */ "./NotFound/NotFound")
//       }
//     ]
//   }
// ];

// export default (authed, authPath) => renderRoutes(routes, authed, authPath)

import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {Todo, Test, NotFound, Animate} from './asyncLoader'

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const routeConfig = ({props}) => (
  <ConnectedSwitch>
    <Route path="/todoList" exact component={Todo}/>
    <Route path="/test" exact component={Test}/>
    <Route path="/animate" exact component={Animate}/>
    <Route path="/notfound" exact component={NotFound}/>
    <Redirect to="/todoList"/>
    <Route component={NotFound}/>
  </ConnectedSwitch>
);

export default connect(state => ({
  location: state.location
}))(routeConfig)