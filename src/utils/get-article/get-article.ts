import { importData } from './types';

export const getArticle = async (id: string | string[] | undefined) => {
  const file: importData = await import(`@/const`);
  return file[`Article${id}`];
};
