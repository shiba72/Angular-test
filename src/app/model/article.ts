export class Article {

  public id: string;
  public createdAt: Date;
  public updatedAt: Date;
  public title: string;
  public description: string;
  public image: any;
  public displayOrder: number;

  constructor(id: string, createdAt: Date, updatedAt: Date, title: string, description: string, image: any, displayOrder: number) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.title = title;
    this.description = description;
    this.image = image;
    this.displayOrder = displayOrder;
  }

}
