export const onCreateChat = /* GraphQL */ `
  subscription onCreateChat {
    onCreateChat {
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

export const onUpdateChat = /* GraphQL */ `
  subscription onUpdateChat {
    onUpdateChat {
      id
      likes
    }
  }
`;
