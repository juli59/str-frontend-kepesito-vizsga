import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://localhost:3000/movies';

  constructor(
    private http: HttpClient) { }




  getMovieList(id: number): Observable<Movie[]> {
      return this.http.get<Movie[]>(`${this.BASE_URL}/${id}`);
    //   }
  }
  get(id: number): Observable<Movie> {
     return this.http.get<Movie>(`${this.BASE_URL}/${id}`);
      }

  deleteMovie(id:number):Observable<Movie> {
    return this.http.delete<Movie>(`${this.BASE_URL}/${id}`);
  }
}
