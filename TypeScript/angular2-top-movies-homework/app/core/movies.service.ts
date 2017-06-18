import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MovieModel } from './movie.model';

@Injectable()
export class MoviesService {
    constructor(private http: Http) { }


    getMovies(search: any) {
        return this.http.get('http://www.omdbapi.com/?s=' + search + '&tomatoes=true&plot=full')
           .map((res: Response) => res.json());
    }
    getCurrentMovie(id: string) {
        return this.http.get('http://www.omdbapi.com/?i=' + id + '&plot=full')
        .map(res => res.json());
    }
}
