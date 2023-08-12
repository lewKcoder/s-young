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

export const createProhibition = /* GraphQL */ `
  mutation createProhibition($input: CreateProhibitionInput!) {
    createProhibition(input: $input) {
      id
      userName
      text
      date
      report
    }
  }
`;
