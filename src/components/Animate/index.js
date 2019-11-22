import React from 'react'
import PropTypes from 'prop-types'
import RcAnimate from 'rc-animate'

const AnimateEl = props => {
  const {
    style,
    visible,
    removeable,
    component,
    componentProps,
    showProp,
    exclusive,
    transitionName,
    transitionAppear,
    transitionEnter,
    transitionLeave,
    onEnd,
    animation,
    ...restProps
  } = props

  if (!visible && removeable) return null

  const newStyle = { ...style, display: visible ? undefined : 'none' }

  return <div {...restProps} style={newStyle} />
}

const Animate = props => {
  return (
    <RcAnimate {...props}>
      {props.exclusive && <AnimateEl {...props} />}
    </RcAnimate>
  )
}

Animate.propTypes = {
  component: PropTypes.string,
  showProp: PropTypes.string,
  visible: PropTypes.bool,
  exclusive: PropTypes.bool
}

Animate.defaultProps = {
  component: '',
  showProp: 'visible',
  visible: true,
  exclusive: true
}

export default React.memo(Animate)
