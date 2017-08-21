const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');
const dataUser = require('../data/User')

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  }
})

const Users = new GraphQLObjectType({
  name: 'Users',
  fields: {
    users: {
      type: new GraphQLList(User),
      resolve: () => dataUser()
    }
  }
})
const userSchemaGQL = new GraphQLSchema({
  query: Users
})

module.exports = userSchemaGQL