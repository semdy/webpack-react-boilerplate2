// import { _setIntlObject, addLocaleData, IntlProvider, intlShape } from 'umi/locale'
//
// const InjectedWrapper = (() => {
//   let sfc = (props, context) => {
//     _setIntlObject(context.intl)
//     return props.children
//   }
//   sfc.contextTypes = {
//     intl: intlShape
//   }
//   return sfc
// })()

import React from 'react'
import { /* addLocaleData, */ IntlProvider } from 'react-intl'
import { ConfigProvider } from 'antd'
import 'moment/locale/zh-cn'
import 'moment/locale/pt-br'

import 'moment/locale/zh-tw'

const baseNavigator = true
const useLocalStorage = true

let defaultAntd = require('antd/lib/locale-provider/zh_CN')

defaultAntd = defaultAntd.default || defaultAntd

const localeInfo = {
  'en-US': {
    messages: {
      ...require('@/locales/en-US.js').default
    },
    locale: 'en-US',
    antd: require('antd/lib/locale-provider/en_US'),
    momentLocale: ''
  },
  'pt-BR': {
    messages: {
      ...require('@/locales/pt-BR.js').default
    },
    locale: 'pt-BR',
    antd: require('antd/lib/locale-provider/pt_BR'),
    momentLocale: 'pt-br'
  },
  'zh-CN': {
    messages: {
      ...require('@/locales/zh-CN.js').default
    },
    locale: 'zh-CN',
    antd: require('antd/lib/locale-provider/zh_CN'),
    momentLocale: 'zh-cn'
  },
  'zh-TW': {
    messages: {
      ...require('@/locales/zh-TW.js').default
    },
    locale: 'zh-TW',
    antd: require('antd/lib/locale-provider/zh_TW'),
    momentLocale: 'zh-tw'
  }
}

let appLocale = {
  locale: 'zh-CN',
  messages: {},
  momentLocale: 'zh-cn'
}

if (
  useLocalStorage &&
  localStorage.getItem('ims_locale') &&
  localeInfo[localStorage.getItem('ims_locale')]
) {
  appLocale = localeInfo[localStorage.getItem('ims_locale')]
} else if (localeInfo[navigator.language] && baseNavigator) {
  appLocale = localeInfo[navigator.language]
} else {
  appLocale = localeInfo['zh-CN'] || appLocale
}
// appLocale.data && addLocaleData(appLocale.data)

export default function LocaleWrapper(props) {
  return (
    <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
      <ConfigProvider
        locale={appLocale.antd ? appLocale.antd.default || appLocale.antd : defaultAntd}
      >
        {props.children}
      </ConfigProvider>
    </IntlProvider>
  )
}
