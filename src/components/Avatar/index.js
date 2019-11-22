import React from 'react'
import propTypes from 'prop-types'
import './avatar.less'

const Avatar = ({ className, url, ...rest }) => {
  return (
    <div {...rest} className={['app-avatar', className].join(' ')}>
      {
        /(^https?:\/\/)|\.(png|jpe?g|webp$)/.test(url)
          ?
            <img src={url} alt="" />
          : <div className="app-avatar-bd">{url}</div>
      }
    </div>
  )
}

Avatar.defaultProps = {
  className: ''
}

Avatar.propTypes = {
  className: propTypes.string,
  url: propTypes.string.isRequired
}

export default React.memo(Avatar)
