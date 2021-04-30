import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  //movies$: Observable<Movie[]> = this.HttpService.getMovies();
  movies: Movie[] = [];

  constructor(
    private HttpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  getMovies(movie: Movie

  ): void {
    this.HttpService.get(movie.id)
  }

  deleteMovie(id: number): any {
    //this.HttpService.delete(id)
  }

}
