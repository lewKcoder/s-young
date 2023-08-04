export const createUser = /* GraphQL */ `
  mutation createUser($icon: String, $userName: String!, $userId: String!, $password: String!) {
    createUser(icon: $icon, userName: $userName, userId: $userId, password: $password) {
      id
      icon
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
      icon
      text
      date
      likes
      prohibition
    }
  }
`;
