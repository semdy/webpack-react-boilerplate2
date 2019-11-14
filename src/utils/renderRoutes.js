import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

function renderRoutes(routes, isLogin, authPath = '/login', extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={ route.key || i }
          path={ route.path }
          exact={ route.redirect ? true : route.exact }
          strict={ route.strict }
          render={ props => {
            if (!route.requireAuth || isLogin || route.path === authPath) {
              if (route.redirect) {
                return <Redirect to={{ pathname: route.redirect, state: { from: props.location } }} />
              }
              if (route.render) {
                return route.render({ ...props, ...extraProps, route: route })
              }
              if (route.component) {
                return <route.component {...props} {...extraProps} route={ route }>
                  { route.routes && renderRoutes(route.routes, isLogin, authPath) }
                </route.component>
              }
              return null
            }
            return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
          }}
        />
      ))}
    </Switch>
  ) : null
}

export default renderRoutes
