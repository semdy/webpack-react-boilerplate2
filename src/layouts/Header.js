import React, { Component } from 'react'
import { Layout } from 'antd'
import Animate from 'rc-animate'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styles from './Header.less'

const { Header } = Layout

class HeaderView extends Component {
  state = {
    visible: true
  }

  static getDerivedStateFromProps(props, state) {
    if (!props.autoHideHeader && !state.visible) {
      return {
        visible: true
      }
    }
    return null
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handScroll, { passive: true })
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handScroll)
  }

  getHeadWidth = () => {
    const { isMobile, collapsed, setting } = this.props
    const { fixedHeader, layout } = setting
    if (isMobile || !fixedHeader || layout === 'topmenu') {
      return '100%'
    }
    return collapsed ? 'calc(100% - 80px)' : 'calc(100% - 256px)'
  }

  handleMenuClick = ({ key }) => {
    const { dispatch, history } = this.props
    if (key === 'userCenter') {
      history.push('/account/center')
      return
    }
    if (key === 'triggerError') {
      history.push('/exception/trigger')
      return
    }
    if (key === 'userinfo') {
      history.push('/account/settings/base')
      return
    }
    if (key === 'logout') {
      dispatch({
        type: 'login/logout'
      })
    }
  }

  handleNoticeVisibleChange = visible => {
    if (visible) {
      const { dispatch } = this.props
      dispatch({
        type: 'global/fetchNotices'
      })
    }
  }

  handScroll = () => {
    const { autoHideHeader } = this.props
    const { visible } = this.state
    if (!autoHideHeader) {
      return
    }
    const scrollTop = document.body.scrollTop + document.documentElement.scrollTop
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => {
        if (this.oldScrollTop > scrollTop) {
          this.setState({
            visible: true
          })
        } else if (scrollTop > 300 && visible) {
          this.setState({
            visible: false
          })
        } else if (scrollTop < 300 && !visible) {
          this.setState({
            visible: true
          })
        }
        this.oldScrollTop = scrollTop
        this.ticking = false
      })
    }
  }

  render() {
    const { isMobile, handleMenuCollapse, setting } = this.props
    const { navTheme, layout, fixedHeader } = setting
    const { visible } = this.state
    const isTop = layout === 'topmenu'
    const width = this.getHeadWidth()
    const HeaderDom = visible ? (
      <Header style={{ padding: 0, width }} className={fixedHeader ? styles.fixedHeader : ''}>
        dfdfsf
      </Header>
    ) : null
    return (
      <Animate component="" transitionName="fade">
        {HeaderDom}
      </Animate>
    )
  }
}

export default withRouter(connect(({ user, global, setting, loading }) => ({
  currentUser: user.currentUser,
  setting
}))(HeaderView))
