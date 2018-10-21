import { createRouteBundle } from 'redux-bundler'
import LinkList from '../components/LinkList'
import CreateLink from '../components/CreateLink'

export default createRouteBundle({
  '/': LinkList,
  '/create': CreateLink
})
