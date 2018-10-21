import React from 'react'
import { connect } from 'redux-bundler-react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { FEED_QUERY } from './LinkList'
import { LINKFORM } from '../bundles/actiontypes'

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`

const CreateLink = ({ linkForm, doUpdateLinkForm, doClearLinkForm, doUpdateUrl }) => {
  const { description, url } = linkForm
  const clearAndRedirectToRoot = () => {
    doUpdateUrl('/')
    doClearLinkForm()
  }
  return (
    <div>
      <div className='flex flex-column mt3'>
        <input
          className='mb2'
          value={description}
          onChange={evt => doUpdateLinkForm(LINKFORM.DESCRIPTION, evt.target.value)}
          type='text'
          placeholder='A description for the link'
        />
        <input
          className='mb2'
          value={url}
          onChange={evt => doUpdateLinkForm(LINKFORM.URL, evt.target.value)}
          type='text'
          placeholder='The URL for the link'
        />
      </div>

      <Mutation
        mutation={POST_MUTATION}
        variables={{ description, url }}
        refetchQueries={[{ query: FEED_QUERY }]}
        onCompleted={clearAndRedirectToRoot}>
        {postMutation => <button onClick={postMutation}>Submit</button>}
      </Mutation>

    </div>
  )
}

export default connect('selectLinkForm', 'doUpdateLinkForm', 'doClearLinkForm', 'doUpdateUrl', CreateLink)
