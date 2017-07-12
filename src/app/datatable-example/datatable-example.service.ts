import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class DatatableExampleService {

  constructor(private oHTTP:Http) {

  }

  getPostsData(): Observable<any> {
    return this.oHTTP.get("https://jsonplaceholder.typicode.com/posts");
  }

  getSampleData() {

  }

}
