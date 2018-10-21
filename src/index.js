import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Provider as RBProvider } from 'redux-bundler-react'
import * as serviceWorker from './serviceWorker'

import './styles/index.css'
import getStore from './bundles'
import App from './components/App'
import cache from './utils/cache'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const authLink = setContext(async (_, { headers }) => {
  const token = await cache.get('loginForm').then(({ authToken }) => {
    return authToken
  })

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

cache.getAll().then(initialData => {
  ReactDOM.render(
    <RBProvider store={getStore(initialData)}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </RBProvider>,
    document.getElementById('root')
  )
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
