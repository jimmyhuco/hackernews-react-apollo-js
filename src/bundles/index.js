import { composeBundles } from 'redux-bundler'
import routes from './routes'
import linkForm from './linkForm'

export default composeBundles(
  routes,
  linkForm
)
