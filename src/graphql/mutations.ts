export const createUser = /* GraphQL */ `
  mutation createUser($userName: String!, $userId: String!, $password: String!) {
    createUser(userName: $userName, userId: $userId, password: $password) {
      id
      userName
      userId
    }
  }
`;

export const createChat = /* GraphQL */ `
  mutation createChat($input: CreateChatInput!) {
    createChat(input: $input) {
      chatId
      user {
        id
        userName
      }
      text
      date
      likes
      prohibition
    }
  }
`;
