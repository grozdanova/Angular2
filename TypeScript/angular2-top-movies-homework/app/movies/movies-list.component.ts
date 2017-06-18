import { Component, OnInit } from '@angular/core';
import { MovieModel, MoviesService } from '../core/';

@Component({
    selector: 'mvdb-movies-list',
    templateUrl: './movies-list.component.html',
    styles: ['img { width: 150px; }', '.nav { background-color: #333; color: white; font-size: 17px; text-align: center;}']
})
export class MoviesListComponent implements OnInit {
    private movies: MovieModel;

    public str: string;
    public res: boolean;
    public search: any;

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {

    }

    onInput(e: any) {
        this.moviesService.getMovies(this.str)
            .subscribe(response => this.movies = response);
    }

    onClick() {
        // this.res = this.movies.Response;
        this.search = this.movies.Search;

    }

}
