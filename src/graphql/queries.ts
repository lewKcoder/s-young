export const getUser = /* GraphQL */ `
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      userName
      userId
      chats {
        items {
          chatId
          text
          date
          likes
          prohibition
        }
      }
    }
  }
`;

export const getChat = /* GraphQL */ `
  query getChat($id: ID!) {
    getChat(id: $id) {
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

export const listChats = /* GraphQL */ `
  query ListChats {
    listChats {
      items {
        chatId
        userName
        text
        date
        likes
        prohibition
      }
      nextToken
    }
  }
`;
