import { routerActions } from 'connected-react-router'
import { stringify } from 'qs'
import { accountLogin, getFakeCaptcha } from '@/services/api'
import { getPageQuery } from '@/utils/utils'

const initialState = () => ({
  currentAuthority: 'guest',
  token: ''
})

export const login = payload => async dispatch => {
  const response = await accountLogin(payload)
  if (response === undefined) return
  dispatch({
    type: 'changeLoginStatus',
    payload: { ...response, currentAuthority: 'user' }
  })
  // Login successfully
  if (response.token) {
    localStorage.setItem('__TOKEN', response.token)
    const urlParams = new URL(window.location.href)
    const params = getPageQuery()
    let { redirect } = params
    if (redirect) {
      const redirectUrlParams = new URL(redirect)
      if (redirectUrlParams.origin === urlParams.origin) {
        redirect = redirect.substr(urlParams.origin.length)
        if (redirect.match(/^\/.*#/)) {
          redirect = redirect.substr(redirect.indexOf('#') + 1)
        }
      } else {
        window.location.href = redirect
        return
      }
    }
    routerActions.replace(redirect || '/')
  }
}

export const getCaptcha = payload => async dispatch => {
  await getFakeCaptcha(payload)
}

export const logout = () => async dispatch => {
  dispatch({
    type: 'changeLoginStatus',
    payload: {
      currentAuthority: 'guest'
    }
  })
  localStorage.removeItem('__TOKEN')
  routerActions.push({
    pathname: '/user/login',
    search: stringify({
      redirect: window.location.href
    })
  })
}

export default (state = initialState(), { type, payload }) => {
  if (type === 'changeLoginStatus') {
    return {
      ...state,
      currentAuthority: payload.currentAuthority,
      token: payload.token
    }
  } else {
    return state
  }
}
