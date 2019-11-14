import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom"
import DocumentTitle from 'react-document-title'
import { Layout } from 'antd'
import './BasicLayout.less'

const { Content } = Layout

const Footer = React.lazy(() => import('./Footer'))

class BasicLayout extends React.Component {
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
    return (
      <DocumentTitle title={"主界面"}>
        <div>
          <div>
            <ul className="nav">
              <li><NavLink activeClassName="selected" exact to="/todoList">TodoList</NavLink></li>
              <li><NavLink activeClassName="selected" to="/animate">Animate</NavLink></li>
              <li><NavLink activeClassName="selected" to="/notfound">NotFound</NavLink></li>
            </ul>
            <Layout>
              <Content>
                { this.props.children }
              </Content>
            </Layout>
          </div>
          <React.Suspense fallback={null}>
            <Footer />
          </React.Suspense>
        </div>
      </DocumentTitle>
    )
  }
}

export default connect(({ global, setting, menu: menuModel }) => ({

}))(BasicLayout)
