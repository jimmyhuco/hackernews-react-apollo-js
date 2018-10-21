import { LOGINFORM } from './actiontypes'

export default {
  name: 'loginForm',
  getReducer: () => {
    const initialData = {
      login: true, // switch between Login and SignUp
      email: '',
      password: '',
      name: '',
      authToken: ''
    }

    return (state = initialData, { type, payload }) => {
      if (type === LOGINFORM.EMAIL) {
        return Object.assign({}, state, {
          email: payload
        })
      }

      if (type === LOGINFORM.PASSWORD) {
        return Object.assign({}, state, {
          password: payload
        })
      }

      if (type === LOGINFORM.NAME) {
        return Object.assign({}, state, {
          name: payload
        })
      }

      if (type === LOGINFORM.TOGGLE) {
        return Object.assign({}, state, {
          login: !state.login
        })
      }

      if (type === LOGINFORM.AUTHENTICATION) {
        let { token } = state.login ? payload.login : payload.signup
        return Object.assign({}, initialData, {
          authToken: token,
          login: false
        })
      }

      if (type === LOGINFORM.LOGOUT) {
        return Object.assign({}, initialData)
      }

      return state
    }
  },

  doUpdateLoginForm: (type, payload) => ({ dispatch }) => {
    dispatch({
      type: type,
      payload: payload
    })
  },

  doToggleLogin: () => ({ dispatch }) => {
    dispatch({ type: LOGINFORM.TOGGLE })
  },

  selectLoginForm: state => state.loginForm,
  selectAuthToken: state => state.loginForm.authToken,

  persistActions: [LOGINFORM.AUTHENTICATION, LOGINFORM.LOGOUT]
}
