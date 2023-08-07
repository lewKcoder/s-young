export const createUser = /* GraphQL */ `
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      userName
      iconColor
    }
  }
`;

export const createChat = /* GraphQL */ `
  mutation createChat($input: CreateChatInput!) {
    createChat(input: $input) {
      chatId
      id
      userName
      iconColor
      text
      date
      likes
      prohibition
    }
  }
`;
