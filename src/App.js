import React from 'react'
import { connect } from 'react-redux'
import renderRoutes from '@/utils/renderRoutes'
import LocaleWrapper from '@/components/LocaleWrapper'
import routes from './pages/router.config'

import './styles/app.less'
import './components/Animate/animate.less'

const App = ({ isLogin }) => {
  return (
    <LocaleWrapper>
      { renderRoutes(routes, isLogin) }
    </LocaleWrapper>
  )
}

const mapStateToProps = state => {
  return {
    isLogin: !!state.login.token
  }
}

export default connect(mapStateToProps)(App)
