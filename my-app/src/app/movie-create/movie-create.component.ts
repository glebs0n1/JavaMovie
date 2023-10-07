import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent {
  movie: any = {};

  constructor(private router: Router, private movieService: MovieService) { }

  createMovie(): void {
    this.movieService.createMovie(this.movie).subscribe(() => {
      this.router.navigate(['/movies']);
    });
  }
}
