import {Component, OnInit} from '@angular/core';
import {RoutesService} from "../routes.service";
import {Movie, Genre} from "../types";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []
  genres: Genre[] = []

  constructor(private routesService: RoutesService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.routesService.getMovies()
      .subscribe((data: Movie[]) => {
        this.movies = data;
        if (id) {
          this.movies = this.movies.filter(e => {
            if (e.genre_ids.includes(id)) {
              return true
            }
            return false
          })
        }
      })

    this.routesService.getGenres()
      .subscribe((data: Genre[]) => {
        this.genres = data;
      })
  }

}
