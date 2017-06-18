import { Component, OnInit } from '@angular/core';
import { MovieModel, MoviesService } from '../core/';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mvdb-movie-details',
    templateUrl: './movie-details.component.html',
    styles: [` body {background-color: powderblue;},
     img { width: 150px; float: left; }, .box { background-color: #ececec; },
      .inner-p {margin: 2px;}`]
})
export class MovieDetailsComponent implements OnInit {
private movies: any;
  id: any;
  paramsSub: any;

    constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    console.log(this.id);
            this.moviesService.getCurrentMovie(this.id)
            .subscribe( res => { this.movies = res; console.log(res); } );
            console.log(this.movies);
  }
    ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
