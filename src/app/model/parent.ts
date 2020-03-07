import { Article } from './article';

export class Parent {

  public contents: Array<Article>;
  public totalCount: number;
  public offset: number;
  public limit: number;

  constructor(contents: Array<Article>, totalCount: number, offset: number, limit: number) {
    this.contents = contents;
    this.totalCount = totalCount;
    this.offset = offset;
    this.limit = limit;
  }

}
