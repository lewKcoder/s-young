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

export const listUsers = /* GraphQL */ `
  query listUsers {
    listUsers {
      items {
        id
        userName
        iconColor
      }
      nextToken
    }
  }
`;

export const getChat = /* GraphQL */ `
  query getChat($id: ID!) {
    getChat(id: $id) {
      chatId
      id
      userName
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
        id
        userName
        iconColor
        text
        date
        likes
        prohibition
      }
      nextToken
    }
  }
`;
