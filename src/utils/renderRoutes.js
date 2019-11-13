import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

function renderRoutes(routes, authed, authPath = '/login', extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {
            if (!route.requiresAuth || authed || route.path === authPath) {
              if (route.redirect) {
                return <Redirect to={{ pathname: route.redirect, state: { from: props.location } }} />
              }
              if (route.render) {
                return route.render({ ...props, ...extraProps, route: route })
              }
              if (route.component) {
                // return <React.Suspense fallback={null}>
                //   <route.component {...props} {...extraProps} route={route}/>
                // </React.Suspense>

                return <route.component {...props} {...extraProps} route={route}/>
              }
              return null
            }
            return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
          }}
        />
      ))}
    </Switch>
  ) : null;
}

export default renderRoutes;
