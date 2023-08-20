import { API, graphqlOperation } from 'aws-amplify';
import { createProhibition } from '@/graphql/mutations';

export const SendProhibitionAPI = () => {
  const sendProhibition = async (
    id: string,
    userName: string,
    date: string,
    text: string,
    report: string
  ) => {
    const param = {
      input: {
        id: id,
        userName: userName,
        text: text,
        date: new Date(date).toISOString(),
        report: report,
      },
    };

    try {
      await API.graphql(graphqlOperation(createProhibition, param));
    } catch (err) {
      console.log('error createProhibition:', err);
    }
  };

  return sendProhibition;
};
