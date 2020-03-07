import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../model/article';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles = new Array<Article>();

  constructor(
      ArticleService: ArticleService ) {
      ArticleService.getArticles().subscribe(response => {
      let parent;
      parent = response;
      // console.log(parent);
      parent.contents.map(item => {
        return new Article(
            item.id,
            item.createdAt,
            item.updatedAt,
            item.title,
            item.description,
            item.image,
            item.displayOrder
        );
      });
      //console.log(parent.contents); // articleを配列で取得
      this.articles = parent.contents;
      // displayOrderの小さい順に並び替え
      this.articles.sort(function(a, b) {
        if (a.displayOrder > b.displayOrder) {
          return 1;
        } else {
          return -1;
        }
      });
    });
  }

  ngOnInit() {
  }

}
