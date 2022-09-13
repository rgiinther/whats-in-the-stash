const { gql } = require("apollo-server-express");

const typeDefs = gql`
 
  type Project {
    _id: ID
    name: String
    type: String
    pattern: [Pattern]
    yarn: [Yarn]
    needles: [Needles]
  }
  type Patterns {
    id: ID
    name: String
    type: String
    file: String
  }
  input Pattern {
    name: String
    file: String
    type: String
  }
  type Yarn {
    _id: ID
    brand: String
    picture: String
    weight: Array
    amount: String
    length: String
  }
  type Needles {
    size: String
  }
  input Needles {
    _id: ID
    type: String
    size: String
    length: String
    quantity: String
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    projects: [Projects]
    yarn: [Yarn]
  }
  type Auth {
    token: ID!
    user: User
  }
  input Picture {
    name: String
    formData: String
  }
  type uploadedPic {
    filename: String
    name: String
    mime: String
    extention: String
    url: String
  }
  input File {
    name: String
    formData: String
  }
  type uploadedFile {
    filename: String
    name: String
    mime: String
    extention: String
    url: String
  }
  type Query {
    me: User
    user(username: String!): User
    projects: [Project]
    project(type: String, name: String): Project
    yarn: [Yarn]
    pattern: [Pattern]
    needles: [Needles]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProject(name: String!, type: String): Project
    removeProject(projectId: String!): Project
    addYarn(brand: String!, weight: String!, amount: String!, length: String!): Yarn
    removeYarn(yarnId: String!): Yarn
    addPattern(name: String, file: String): Patterns
    addNeedles(input: Needles!): Needles
    uploadPic(input: Picture!): uploadedPic
    uploadedFile(input: File!): uploadedFile
  }
`;

module.exports = typeDefs;