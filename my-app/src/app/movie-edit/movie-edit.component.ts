import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    const id = +(<string>this.route.snapshot.paramMap.get('id'));
    this.loadMovie(id);
  }

  loadMovie(id: number): void {
    this.movieService.getMovieById(id).subscribe((data) => {
      this.movie = data;
    });
  }
}
