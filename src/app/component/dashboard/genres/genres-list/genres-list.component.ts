import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Genre} from "../../../../entities/genre";
import {GenreService} from "../../../../service/genre/genre.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import Swal from "sweetalert2";
import * as PersonActions from "../../../../state/person/person-action";

  @Component({
    selector: 'app-genres-list',
    templateUrl: './genres-list.component.html',
    styleUrls: ['./genres-list.component.css']
  })
  export class GenresListComponent implements OnInit{
    genres$!: Observable<Genre[]>;
    genreForm! : FormGroup

    constructor(private genreService: GenreService,
                private fb : FormBuilder) { }

    ngOnInit(): void {
      this.genres$ = this.genreService.getAllGenres();
      this.genreForm = this.fb.group({
        name: ['']
      });

    }


    onSubmit() {
      this.genreService.addGenre(this.genreForm.value).subscribe(
        res => {

          this.genres$ = this.genreService.getAllGenres();
          Swal.fire("Genre added successfully", "success");
        }
      );
    }

    deleteGenre(id: number) {
      Swal.fire({
        title: 'Are you sure want to remove?',
        text: 'You will not be able to recover this genre!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.genreService.deleteGenre(id).subscribe(
            res => {
              this.genres$ = this.genreService.getAllGenres();
            }
          );          Swal.fire(
            'Deleted!',
            'the genre has been deleted.',
            'success'
          )

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'the genre is safe :)',
            'error'
          )
        }
      })

    }
  }
