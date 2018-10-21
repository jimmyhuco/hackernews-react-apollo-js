import React from 'react'
import { connect } from 'redux-bundler-react'
import navHelper from 'internal-nav-helper'
import Header from './Header'

const App = ({ doUpdateUrl, route }) => {
  const Content = route
  return (
    <div className='center w85' onClick={navHelper(doUpdateUrl)}>
      <Header />
      <div className='ph3 pv1 background-gray'>
        <Content />
      </div>
    </div>
  )
}

export default connect('selectRoute', 'doUpdateUrl', App)
