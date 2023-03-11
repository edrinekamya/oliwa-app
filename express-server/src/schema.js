const { makeExecutableSchema } = require('@graphql-tools/schema');
const User = require('./models');

// Define the GraphQL schema
const typeDefs = `
  type Query {
    users: [User]
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    phoneNumber: String!
    nationalPhoneNumber: String!
    location: String!
  }

  type Mutation {
    createUser(name: String!, phoneNumber: String!, nationalPhoneNumber: String!, location: String!): User
  }
`;

// Define the resolvers for the GraphQL schema
const resolvers = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: (_, { name, phoneNumber, nationalPhoneNumber, location }) => {
      const user = new User({
        name,
        phoneNumber,
        nationalPhoneNumber,
        location,
      });
      return user.save();
    },
  },
};

// Create the executable GraphQL schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
