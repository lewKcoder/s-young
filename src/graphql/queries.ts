export const getUser = /* GraphQL */ `
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      icon
      userName
      userId
      chats {
        chatId
        text
        date
        likes
        prohibition
      }
    }
  }
`;

export const getChat = /* GraphQL */ `
  query getChat($chatId: ID!) {
    getChat(chatId: $chatId) {
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
