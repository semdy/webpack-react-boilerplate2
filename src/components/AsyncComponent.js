import React, { PureComponent } from 'react'
import PageLoading from '@/components/PageLoading'

export default (importComponent, placeholder = <PageLoading />) => {
  class AsyncComponent extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const component = await importComponent()

      this.setState({
        component: component.default || component
      })
    }

    render() {
      const C = this.state.component

      return C ? <C {...this.props} /> : placeholder
    }
  }

  return AsyncComponent
}
