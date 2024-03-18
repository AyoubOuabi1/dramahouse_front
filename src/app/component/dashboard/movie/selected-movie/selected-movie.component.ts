import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../state/app-state";
import { ActivatedRoute } from "@angular/router";
import * as MovieActions from "../../../../state/movie/movie-action";
import { Observable } from "rxjs";
import { Genre } from "../../../../entities/genre";
import { Person } from "../../../../entities/person";
import * as PersionActions from "../../../../state/person/person-action";
import { GenreService } from "../../../../service/genre/genre.service";
import Swal from "sweetalert2";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  movieForm!: FormGroup;
  genres$!: Observable<Genre[]>;
  person$!: Observable<Person[]>;
  personData: Array<any> = [];
  genreData: Array<any> = [];
  dropdownSettings: any = {};
  dropdownSettingsSingle: any = {};
  fileInputs: { [key: string]: File } = {};
  selectedGenreItems: Array<any> = [];
  selectedPersonItems: Array<any> = [];
  selectedDerictorItems: Array<any> = [];
  singleDirectorItem: Array<any> = [];
  videoUrl: string | undefined;
  coverUrl: string | undefined;
  posterUrl: string |undefined;
  constructor(private store: Store<AppState>,
              private genreService: GenreService,
              private activeRoute: ActivatedRoute,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.movieForm = new FormGroup({
      'id': new FormControl(''),
      'title': new FormControl(''),
      'videoFile': new FormControl(''),
      'posterFile': new FormControl(''),
      'coverFile': new FormControl(''),
      'trailerUrl': new FormControl(''),
      'releaseDate': new FormControl(''),
      'duration': new FormControl(''),
      'directorId': new FormControl(''),
      'language': new FormControl(''),
      'description': new FormControl(''),
      'genres': new FormControl(''),
      'cast': new FormControl('')
    });

    this.activeRoute.params.subscribe(params => {
      const id = +params['id'];
      this.store.dispatch(MovieActions.loadMovieById({id}));
    });

    this.store.select(state => state.movie.selectedMovie).subscribe(movie => {
      movie?.genres.forEach(genre => {
        this.selectedGenreItems.push({id: genre.id.toString(), name: genre.name});
      });
      movie?.cast.forEach(person => {
        this.selectedPersonItems.push({id: person.id.toString(), name: person.name});
      });
      this.selectedDerictorItems.push({id: movie?.director.id.toString(), name: movie?.director.name});
       this.singleDirectorItem.push({id : this.selectedDerictorItems[1].id, name: this.selectedDerictorItems[1].name});
      this.movieForm.patchValue({
        'id': movie?.id,
        'title': movie?.title,
        'trailerUrl': movie?.trailerUrl,
        'releaseDate': movie?.releaseDate,
        'duration': movie?.duration,
        'directorId':this.singleDirectorItem,
        'language': movie?.language,
        'description': movie?.description,
        'genres': this.selectedGenreItems,
        'cast': this.selectedPersonItems
      });
      this.videoUrl = movie?.videoUrl;
      this.coverUrl = movie?.coverUrl;
      this.posterUrl = movie?.posterUrl;

    });

    this.loadData();
    this.dropdownSettingOpt();
    this.dropdownSettingOptSingle();
  }

  updateMovie(): void {
    if (this.movieForm.valid) {
      this.spinner.show();
      const formData = new FormData();
      Object.keys(this.movieForm.controls).forEach(key => {
        // @ts-ignore
        if (this.fileInputs[key]) {
          formData.append(key, this.fileInputs[key]);
        } else if (key !== 'genres' && key !== 'cast'&& key !== 'directorId') {
          // @ts-ignore
          formData.append(key, this.movieForm.get(key).value);
        }
      });

      let formValue = this.movieForm.value;
      formValue.genres = formValue.genres.map((genre: { id: any; }) => genre.id);
      formValue.cast = formValue.cast.map((person: { id: any; }) => person.id);
      formValue.directorId = formValue.directorId.map((person: { id: any; }) => person.id);
      formValue.directorId = formValue.directorId[0];
      console.log(formValue.directorId)
      formData.append('directorId', formValue.directorId);
      formData.append('genres', formValue.genres.join(','));
      formData.append('cast', formValue.cast.join(','));

      this.store.dispatch(MovieActions.updateMovie({ movie: formData}));
      // @ts-ignore
      console.log(this.activeRoute.params['id'])
      this.store.select('movie').subscribe(() => {
        setTimeout(() => {
          this.spinner.hide(); // Hide the spinner after a delay
          Swal.fire("Movie Updated Successfully", "", "success");
        }, 1000);
      });
    }
  }

  onFileChange(event: any, field: string) {
    if (event.target.files.length > 0) {
      this.fileInputs[field] = event.target.files[0];
    }
  }

  dropdownSettingOpt() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 100,
      allowSearchFilter: true
    };
  }
  dropdownSettingOptSingle() {
    this.dropdownSettingsSingle = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 100,
      allowSearchFilter: true
    };
  }
  loadData() {
    this.store.dispatch(PersionActions.loadAllPersons());
    this.person$ = this.store.select(state => state.person.persons);
    this.genres$ = this.genreService.getAllGenres();

    this.person$.subscribe(persons => {
      this.personData = persons.map(person => {
        return {id: person.id.toString(), name: person.name};
      });
    });

    this.genres$.subscribe(genres => {
      this.genreData = genres.map(genre => {
        return {id: genre.id.toString(), name: genre.name};
      });
    });
  }
}
