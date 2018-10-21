import React from 'react'
import { connect } from 'redux-bundler-react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { LOGINFORM } from '../bundles/actiontypes'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

const Login = ({ loginForm, doUpdateLoginForm, doToggleLogin, doUpdateUrl }) => {
  const { login, email, password, name } = loginForm

  const loginAndRedirectToRoot = (data) => {
    doUpdateLoginForm(LOGINFORM.AUTHENTICATION, data)
    doUpdateUrl('/')
  }

  return (
    <div>
      <h4 className='mv3'>{login ? 'Login' : 'Sign Up'}</h4>
      <div className='flex flex-column'>
        {!login && (
          <input
            value={name}
            onChange={e => doUpdateLoginForm(LOGINFORM.NAME, e.target.value)}
            type='text'
            placeholder='Your name'
          />
        )}
        <input
          value={email}
          onChange={e => doUpdateLoginForm(LOGINFORM.EMAIL, e.target.value)}
          type='text'
          placeholder='Your email address'
        />
        <input
          value={password}
          onChange={e => doUpdateLoginForm(LOGINFORM.PASSWORD, e.target.value)}
          type='password'
          placeholder='Choose a safe password'
        />
      </div>
      <div className='flex mt3'>
        <Mutation
          mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
          variables={{ email, password, name }}
          onCompleted={data => loginAndRedirectToRoot(data)}
        >
          {mutation => (
            <div className='pointer mr2 button' onClick={mutation}>
              {login ? 'login' : 'create account'}
            </div>
          )}
        </Mutation>
        <div
          className='pointer button'
          onClick={() => doToggleLogin()}
        >
          {login
            ? 'need to create an account?'
            : 'already have an account?'}
        </div>
      </div>
    </div>
  )
}

export default connect('selectLoginForm', 'doUpdateLoginForm', 'doToggleLogin', 'doUpdateUrl', Login)
