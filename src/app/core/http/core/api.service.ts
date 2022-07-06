import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

export interface Dictionary {
  [param: string]: string | string[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  get<T>(path: string, params: HttpParams | Dictionary = new HttpParams()): Promise<T> {

    return this.http.get<T>(path, {params}).toPromise();
  }

  getList<T>(path: string, params: HttpParams | Dictionary = new HttpParams()): Promise<T[]> {

    return this.http.get<T[]>(path, {params}).toPromise();
  }

  post<T>(
    path: string,
    body: T | Dictionary | FormData = {},
    params: HttpParams | Dictionary = new HttpParams()): Promise<T> {

    return this.http.post<T>(path, body, {params}).toPromise();
  }

  postList<T>(
    path: string,
    body: T[] | Dictionary[] | FormData = [],
    params: HttpParams | Dictionary = new HttpParams()): Promise<T[]> {

    return this.http.post<T[]>(path, body, {params}).toPromise();
  }

  delete<T>(path: string, params: HttpParams | Dictionary = new HttpParams()): Promise<Dictionary> {

    return this.http.delete<Dictionary>(path, {params})
      .toPromise()
      .then(res => {
        console.log(res);
        return res;
      });
  }

  put<T>(
    path: string,
    body: T | Dictionary | FormData = {},
    params: HttpParams | Dictionary = new HttpParams()): Promise<Dictionary> {

    return this.http.put<Dictionary>(path, body, {params})
      .toPromise()
      .then(res => {
        console.log(res);
        return res;
      });
  }

  putList<T>(
    path: string,
    body: T[] | Dictionary[] | FormData = [],
    params: HttpParams | Dictionary = new HttpParams()): Promise<Dictionary[]> {

    return this.http.put<Dictionary[]>(path, body, {params})
      .toPromise()
      .then(res => {
        console.log(res);
        return res;
      });
  }
}
