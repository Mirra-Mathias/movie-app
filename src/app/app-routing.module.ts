import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent} from "./movies/movies.component";
import { CardComponent} from "./card/card.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'card/:id', component: CardComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
