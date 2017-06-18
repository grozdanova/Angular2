import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MoviesService, MoviesFilterPipe, MoviesSortingPipe } from './core/';

import { AppComponent } from './app.component';
import { MoviesListComponent, MovieShortComponent, MovieDetailsComponent } from './movies/';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'movie/:id',      component: MovieDetailsComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieShortComponent,
    MoviesFilterPipe,
    MoviesSortingPipe,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
