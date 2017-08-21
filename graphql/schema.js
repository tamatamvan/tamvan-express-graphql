const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

cosnt User = new GraphQLObjectType({
  name: 'User',
  fields: {
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  }
})

const userSchemaGQL = new GraphQLSchema({
  query: User
})

module.exports = userSchemaGQL