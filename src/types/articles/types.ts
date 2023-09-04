type ArticleContent =
  | {
      htmlType: 'img';
      content: { src: string; alt: string };
    }
  | {
      htmlType: string;
      content: string | string[];
    };

export type ArticlesProps = {
  articles: (ArticleContent & { id?: number })[];
};
