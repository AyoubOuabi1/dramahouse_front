import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from "rxjs";
import {Genre} from "../../../../entities/genre";
import {Person} from "../../../../entities/person";
import {GenreService} from "../../../../service/genre/genre.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../state/app-state";
import * as PersionActions from "../../../../state/person/person-action";
import * as MovieActions from "../../../../state/movie/movie-action";
import Swal from "sweetalert2";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  movieForm!: FormGroup;
  genres$!:Observable<Genre[]>;
  person$!:Observable<Person[]>;
  personData: Array<any> = [];
  genreData: Array<any> = [];
  dropdownSettings: any = {};

  fileInputs: { [key: string]: File } = {};

  constructor(private fb: FormBuilder,
              private genreService: GenreService,
              private store : Store<AppState>,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      videoFile: ['', Validators.required],
      posterFile: ['', Validators.required],
      coverFile: ['', Validators.required],
      trailerUrl: ['', Validators.required],
      releaseDate: ['', Validators.required],
      duration: ['', Validators.required],
      directorId: ['', Validators.required],
      language: ['', Validators.required],
      description: ['', Validators.required],
      genres: [[], Validators.required],
      cast: [[], Validators.required]
    });
    this.loadData();
   this.dropdownSettingOpt();

  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      this.spinner.show();
      const formData = new FormData();
      Object.keys(this.movieForm.controls).forEach(key => {
        if (this.fileInputs[key]) {
          formData.append(key, this.fileInputs[key]);
        } else if (key !== 'genres' && key !== 'cast') {
          // @ts-ignore
          formData.append(key, this.movieForm.get(key).value);
        }
      });

      let formValue = this.movieForm.value;
      formValue.genres = formValue.genres.map((genre: { id: any; }) => genre.id);
      formValue.cast = formValue.cast.map((person: { id: any; }) => person.id);

      formData.append('genres', formValue.genres.join(','));
      formData.append('cast', formValue.cast.join(','));
      this.store.dispatch(MovieActions.addMovie({ movie: formData }));
      this.store.select('movie').subscribe(() => {
        setTimeout(() => {
          this.spinner.hide(); // Hide the spinner after a delay
          Swal.fire("Movie Added Successfully", "", "success");
        }, 1000);

      });
      this.movieForm.reset()
    }
  }
  onFileChange(event: any, field: string) {
    if (event.target.files.length > 0) {
      this.fileInputs[field] = event.target.files[0];
    }
  }
  consoleFormData(formData: FormData) {
    formData.forEach((value, key) => {
      console.log('Key:', key);
      console.log('Value:', value);
    });
  }

  dropdownSettingOpt() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }

  loadData() {
    this.store.dispatch(PersionActions.loadAllPersons());
    this.person$ = this.store.select(state => state.person.persons);
    this.genres$ = this.genreService.getAllGenres();

    this.person$.subscribe(persons => {
      this.personData = persons.map(person => {
        return { id: person.id.toString(), name: person.name };
      });
    });

    this.genres$.subscribe(genres => {
      this.genreData = genres.map(genre => {
        return { id: genre.id.toString(), name: genre.name };
      });
    });
  }
}
