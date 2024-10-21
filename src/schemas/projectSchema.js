const { gql } = require('apollo-server');

const typeDefs = gql`
      type Project {
           _id: ID!
           name: String!
           description: String!
           startDate: String!
           endDate: String!
           status: String!
           budget: Float!
      }
           
      type Query {
            projects: [Project]!
      }
            
      type Mutation {
            CreateProject(
              name: String!, 
              description: String!, 
              startDate: String!, 
              endDate: String!, 
              status: String!, 
              budget: Float!
            ): Project!
            
            UpdateProject(
              _id: ID!, 
              name: String, 
              description: String, 
              startDate: String, 
              endDate: String, 
              status: String, 
              budget: Float
            ): Project!
            
            DeleteProject(_id: ID!): Project!
      }
`;

module.exports = typeDefs;
