/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
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
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
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
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
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
