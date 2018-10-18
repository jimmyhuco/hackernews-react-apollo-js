import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

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

const CreateLink = () => {
  return (
    <Mutation mutation={POST_MUTATION}>
      {(postMutation) => (
        <form
          onSubmit={e => {
            e.preventDefault()
            let desIpt = e.target.elements.description
            let urlIpt = e.target.elements.url
            postMutation({ variables: { description: desIpt.value, url: urlIpt.value } })
            desIpt.value = ''
            urlIpt.value = ''
          }}>
          <div className='flex flex-column mt3'>
            <input
              className='mb2'
              name='description'
              type='text'
              placeholder='A description for the link'
            />
            <input
              className='mb2'
              name='url'
              type='text'
              placeholder='The URL for the link'
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      )}
    </Mutation>
  )
}

export default CreateLink
