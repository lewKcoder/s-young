/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat($filter: ModelSubscriptionChatFilterInput) {
    onCreateChat(filter: $filter) {
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
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat($filter: ModelSubscriptionChatFilterInput) {
    onUpdateChat(filter: $filter) {
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
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat($filter: ModelSubscriptionChatFilterInput) {
    onDeleteChat(filter: $filter) {
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
