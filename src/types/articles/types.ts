type ArticleContent =
  | {
      htmlType: 'img';
      content: { src: string; alt: string; width?: string; height?: string };
    }
  | {
      htmlType: 'referenceLinks';
      content: { label: string; href: string }[];
    }
  | {
      htmlType: 'ul';
      content: string[];
    }
  | {
      htmlType: 'h1' | 'h2' | 'h3' | 'p';
      content: string;
    };

export type ArticlesProps = {
  articles: (ArticleContent & { id?: number })[];
};
