import { createSelector } from 'redux-bundler'

export default {
  name: 'redirects',

  reactAfterLogin: createSelector('selectPathname', 'selectAuthToken', (pathname, authToken) => {
    if (pathname === '/login' && authToken) return { actionCreator: 'doUpdateUrl', args: ['/'] }
  }),

  reactNotLogin: createSelector('selectPathname', 'selectAuthToken', (pathname, authToken) => {
    if (pathname === '/create' && !authToken) return { actionCreator: 'doUpdateUrl', args: ['/'] }
  })
}
