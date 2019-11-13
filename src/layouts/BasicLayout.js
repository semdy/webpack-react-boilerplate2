import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom"
import DocumentTitle from 'react-document-title'
import renderRoutes from '@/utils/renderRoutes'
import './BasicLayout.less'

const Footer = React.lazy(() => import('./Footer'))

class BasicLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {
      dispatch,
      route: { routes, authority }
    } = this.props
    dispatch({
      type: 'user/getCurrent',
      payload: {
        name: '星月君',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
      }
    })
    dispatch({
      type: 'setting/getSetting'
    })
    dispatch({
      type: 'menu/getMenuData',
      payload: { routes, authority }
    })
  }

  componentDidUpdate(preProps) {
    // After changing to phone mode,
    // if collapsed is true, you need to click twice to display
    const { collapsed, isMobile } = this.props
    if (isMobile && !preProps.isMobile && !collapsed) {
      this.handleMenuCollapse(false)
    }
  }

  getContext() {
    const { location, breadcrumbNameMap } = this.props
    return {
      location,
      breadcrumbNameMap
    }
  }

  getPageTitle = (pathname, breadcrumbNameMap) => {
    return '2222'
  }

  render() {
    const {
      navTheme,
      layout: PropsLayout,
      children,
      location: { pathname },
      isMobile,
      menuData,
      breadcrumbNameMap,
      route: { routes },
      fixedHeader
    } = this.props

    return (
      <DocumentTitle title={"主界面"}>
        <div>
          <div>
            <ul className="nav">
              <li><NavLink activeClassName="selected" exact to="/todoList">TodoList</NavLink></li>
              <li><NavLink activeClassName="selected" to="/test">Test</NavLink></li>
              <li><NavLink activeClassName="selected" to="/animate">Animate</NavLink></li>
              <li><NavLink activeClassName="selected" to="/notfound">NotFound</NavLink></li>
            </ul>
            <React.Suspense fallback={null}>
              <Footer />
            </React.Suspense>
          </div>
          {/*{ renderRoutes(this.props.route.routes) }*/}

        </div>
      </DocumentTitle>
    )
  }
}

export default connect(({ global, setting, menu: menuModel }) => ({

}))(BasicLayout)
