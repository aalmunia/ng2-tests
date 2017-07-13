import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DatatableExampleService {

  private _baseURL = "https://jsonplaceholder.typicode.com/";

  constructor(private oHTTP:Http) { }

  getPosts(): Observable<any> {
    return this.oHTTP.get(this._baseURL + "posts");
  }

  getComments(): Observable<any> {
    return this.oHTTP.get(this._baseURL + "comments");
  }

  getAlbums(): Observable<any> {
    return this.oHTTP.get(this._baseURL + "albums");    
  }

  getPhotos(): Observable<any> {
    return this.oHTTP.get(this._baseURL + "photos");
  }

  getTodos(): Observable<any> {
    return this.oHTTP.get(this._baseURL + "todos");
  }

  getUsers(): Observable<any> {
    return this.oHTTP.get(this._baseURL + "users");
  }

  getAny(sURL): Observable<any> {
    return this.oHTTP.get(sURL);
  }

  getSinglePost(idPost): Observable<any> {
    return this.oHTTP.get(this._baseURL + "posts/" + idPost);
  }

  getSingleComment(idComment): Observable<any> {
    return this.oHTTP.get(this._baseURL + "comments/" + idComment);
  }

  getSingleAlbum(idAlbum): Observable<any> {
    return this.oHTTP.get(this._baseURL + "albums/" + idAlbum);
  }

  getSingleTodos(idTodo): Observable<any> {
    return this.oHTTP.get(this._baseURL + "todos/" + idTodo);
  }

  getSinglePhoto(idPhoto): Observable<any> {
    return this.oHTTP.get(this._baseURL + "photos/" + idPhoto);
  }

  getSingleUser(idUser): Observable<any> {
    return this.oHTTP.get(this._baseURL + "users/"+ idUser);
  }
  
}
