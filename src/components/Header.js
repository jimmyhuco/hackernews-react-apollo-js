import React from 'react'
import { connect } from 'redux-bundler-react'
import { LOGINFORM } from '../bundles/actiontypes'

const Header = ({ authToken, doUpdateLoginForm, doUpdateUrl }) => {
  const logoutAndRedirectToRoot = () => {
    doUpdateLoginForm(LOGINFORM.LOGOUT)
    doUpdateUrl('/')
  }

  return (
    <div className='flex pa1 justify-between nowrap orange'>
      <div className='flex flex-fixed black'>
        <div className='fw7 mr1'>Hacker News</div>
        <a href='/' className='ml1 no-underline black'>
          new
        </a>
        {authToken && (
          <div className='flex'>
            <div className='ml1'>|</div>
            <a href='/create' className='ml1 no-underline black'>
              submit
            </a>
          </div>
        )}
      </div>
      <div className='flex flex-fixed'>
        {authToken ? (
          <div
            className='ml1 pointer black'
            onClick={() => logoutAndRedirectToRoot()}>
            logout
          </div>
        ) : (
          <a href='/login' className='ml1 no-underline black'>
            login
          </a>
        )}
      </div>
    </div>

  )
}

export default connect('selectAuthToken', 'doUpdateLoginForm', 'doUpdateUrl', Header)
