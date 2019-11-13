import React, { Component } from "react";

export default (importComponent, placeholder = null) => {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const component = await importComponent();

      this.setState({
        component: component.default || component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : placeholder;
    }
  }

  return AsyncComponent;
}
