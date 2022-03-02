import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Movie, Genre} from "./types";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  baseUrl = 'https://movie-api.benoithubert.me/'



  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    }),
  };

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(`${this.baseUrl}movies`)
  }

  getCard(id: number): any {
    console.log(`${this.baseUrl}movies\\${id}`)
    return this.http
      .get(`${this.baseUrl}movies\\${id}`)
  }

  getGenres(): Observable<Genre[]> {
    return this.http
      .get<Genre[]>(`${this.baseUrl}genres`)
  }
}
