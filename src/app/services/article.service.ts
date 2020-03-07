import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { HttpHeaders } from '@angular/common/http';
import { Parent } from '../model/parent';

const httpOptions = {
  headers: new HttpHeaders({ 'X-API-KEY': 'b279aadc-834e-4977-80e2-e7ba2c825bb7'})
};

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  constructor(private http: HttpClient) { }

  public getArticles(): Observable<Parent[]> {
    const url = 'https://ispec-test.microcms.io/api/v1/photo';
    console.log(this.http.get<Parent[]>(url, httpOptions));
    return this.http.get<Parent[]>(url, httpOptions);
  }
}
