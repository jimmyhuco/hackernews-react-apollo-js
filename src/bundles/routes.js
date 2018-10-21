import { createRouteBundle } from 'redux-bundler'
import LinkList from '../components/LinkList'
import CreateLink from '../components/CreateLink'
import Login from '../components/Login'

export default createRouteBundle({
  '/': LinkList,
  '/create': CreateLink,
  '/login': Login
})
