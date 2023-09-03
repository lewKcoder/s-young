export type ArticlesProps = {
  articles: {
    id?: number;
    htmlType: string;
    content: string | string[];
  }[];
};
