export interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

export interface RateArticleArg extends GetArticleRatingArg {
  rate: number;
  feedback?: string;
}
