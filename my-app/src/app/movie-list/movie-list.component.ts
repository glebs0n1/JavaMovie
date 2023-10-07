import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

interface Movie {
  id: number;
  title: string;
  director: string;
  year: number;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }

  editMovie(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  viewMovie(id: number): void {
    this.router.navigate(['/movies', id]);
  }
}
