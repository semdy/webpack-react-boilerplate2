import React from 'react'
import renderRoutes from '@/utils/renderRoutes'
import LocaleWrapper from "@/components/LocaleWrapper"
import routes from './router.config'

import './styles/app.scss'
import './components/Animate/animate.less'

const App = () =>
  <LocaleWrapper>
    { renderRoutes(routes) }
  </LocaleWrapper>

export default App
