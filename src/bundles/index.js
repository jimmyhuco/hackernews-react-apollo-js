import { composeBundles, createCacheBundle } from 'redux-bundler'
import routes from './routes'
import linkForm from './linkForm'
import loginForm from './loginForm'
import cache from '../utils/cache'
import redirects from './redirects'

export default composeBundles(
  routes,
  linkForm,
  loginForm,
  redirects,
  createCacheBundle(cache.set)
)
