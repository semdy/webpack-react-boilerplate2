import React, { memo } from 'react'
import DocumentTitle from 'react-document-title'
import { title } from '../defaultSettings'
import styles from './UserLayout.module.less'

/* const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2019 {title}
  </Fragment>
) */

const UserLayout = memo(({ children }) => (
  <DocumentTitle title={`登录 - ${title}`}>
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
      {/* <GlobalFooter copyright={copyright} /> */}
    </div>
  </DocumentTitle>
))

export default UserLayout
