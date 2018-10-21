import { LINKFORM } from './actiontypes'

export default {
  name: 'linkForm',
  getReducer: () => {
    const initialData = {
      description: '',
      url: ''
    }

    return (state = initialData, { type, payload }) => {
      if (type === LINKFORM.DESCRIPTION) {
        return Object.assign({}, state, {
          description: payload
        })
      }

      if (type === LINKFORM.URL) {
        return Object.assign({}, state, {
          url: payload
        })
      }

      if (type === LINKFORM.CLEAR) {
        return Object.assign({}, state, initialData)
      }

      return state
    }
  },

  doUpdateLinkForm: (type, payload) => ({ dispatch }) => {
    dispatch({
      type: type,
      payload: payload
    })
  },

  doClearLinkForm: () => ({ dispatch }) => {
    dispatch({ type: LINKFORM.CLEAR })
  },

  selectLinkForm: state => state.linkForm
}
