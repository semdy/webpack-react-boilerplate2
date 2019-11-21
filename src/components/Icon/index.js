import React from 'react'
import propTypes from 'prop-types'
import './icon.less'

const Icon = ({ name, className, size, color, type, style, ...rest }) => {
  const styles = { ...style, color, fontSize: size }
  return (
    <div {...rest} className={['app-icon', className].join(' ')} style={styles}>
      {type === 'svg' ? (
        <svg className="icon-symbol">
          <use xlinkHref={`#${name}`} />
        </svg>
      ) : type === 'iconfont' ? (
        <i className={['iconfont', `icon-${name}`].join(' ')} />
      ) : (
        <img className="icon-symbol" src={require(`@/assets/img/${name}.png`)} alt={name} />
      )}
    </div>
  )
}

Icon.defaultProps = {
  className: '',
  size: '16px',
  color: '',
  type: 'svg',
  style: {}
}

Icon.propTypes = {
  name: propTypes.string.isRequired,
  className: propTypes.string,
  size: propTypes.string,
  color: propTypes.string,
  type: propTypes.oneOf(['iconfont', 'svg', 'img']),
  style: propTypes.object
}

export default Icon
