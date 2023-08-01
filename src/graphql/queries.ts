/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      icon
      chats {
        items {
          id
          userId
          date
          text
          likes
          prohibitions
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        icon
        chats {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
      id
      userId
      user {
        id
        name
        icon
        chats {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      date
      text
      likes
      prohibitions
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        user {
          id
          name
          icon
          createdAt
          updatedAt
          __typename
        }
        date
        text
        likes
        prohibitions
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const chatsByDate = /* GraphQL */ `
  query ChatsByDate(
    $date: String!
    $sortDirection: ModelSortDirection
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatsByDate(
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        user {
          id
          name
          icon
          createdAt
          updatedAt
          __typename
        }
        date
        text
        likes
        prohibitions
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
