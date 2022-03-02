import { Component, OnInit } from '@angular/core';
import  { RoutesService } from "../routes.service";
import { Movie} from "../types";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[]= []
  constructor(private route: RoutesService) { }

  ngOnInit() {
    this.route.getMovies()
      .subscribe((data: Movie[]) => {
        this.movies = data;
      })
  }

}
