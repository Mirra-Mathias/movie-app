import {Component, OnInit} from '@angular/core';
import {RoutesService} from "../routes.service";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../types";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  movie?: Movie

    constructor(private route: ActivatedRoute, private routeService: RoutesService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.routeService
      .getCard(id)
      .subscribe((data: Movie) => {
        console.log(data)
        this.movie = data
      })
  }

}
