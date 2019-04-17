import { createTestClient } from 'apollo-server-testing'
import { ApolloServer, gql } from 'apollo-server-express'
import schema from '../../schema'
import { users } from '../../db'

describe('Query.unconnectedUsers', () => {
  it('should fetch all users the current user is not chatting with', async () => {
    let currentUser = users[0]

    const server = new ApolloServer({
      schema,
      context: () => ({ currentUser }),
    })

    const { query } = createTestClient(server)

    let res = await query({
      query: gql `
        query GetUnconnectedUsers {
          unconnectedUsers {
            id
            name
            picture
          }
        }
      `,
    })

    expect(res.data).toBeDefined()
    expect(res.errors).toBeUndefined()
    expect(res.data).toMatchSnapshot()

    currentUser = users[1]

    res = await query({
      query: gql `
        query GetUnconnectedUsers {
          unconnectedUsers {
            id
            name
            picture
          }
        }
      `,
    })

    expect(res.data).toBeDefined()
    expect(res.errors).toBeUndefined()
    expect(res.data).toMatchSnapshot()
  })
})
