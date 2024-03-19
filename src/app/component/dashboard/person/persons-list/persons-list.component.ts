import {Component, OnInit} from '@angular/core';
import {debounceTime, Observable, Subject} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app-state";
 import {Router} from "@angular/router";
import * as PersonActions from "../../../../state/person/person-action";
import {Person} from "../../../../entities/person";
import {map} from "rxjs/operators";
import Swal from "sweetalert2";
 @Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  persons$!: Observable<Person[]>;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;
  searchTermm = new Subject<string>();
  constructor(private store: Store<AppState>,
              private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(PersonActions.loadAllPersons());
    this.persons$ = this.store.pipe(select(state => state.person.persons));
    this.persons$.subscribe(person => {
      this.totalItems = person.length;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    });
    this.searchTermm.pipe(
      debounceTime(400)
    ).subscribe(searchTerm => {
      if (searchTerm) {
        this.store.dispatch(PersonActions.findPersonByName({ name: searchTerm }));
        console.log(searchTerm)
      } else {
        console.log(searchTerm+" else")
        this.store.dispatch(PersonActions.loadAllPersons());
      }
    });
  }
  searchPerson(event: any): void {
    this.searchTermm.next(event.target.value);
  }


  getPaginatedPerson(): Observable<Person[]> {
    return this.persons$.pipe(
      map(person => person.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage))
    );
  }

  nextPage(): void {
    this.currentPage++;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  view(personId: number) {
    this.router.navigate(['/dashboard/selected-person', personId]);
  }

  deletePerson(id: number): void {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this actor | director!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.store.dispatch(PersonActions.deletePerson({ id }));
        Swal.fire(
          'Deleted!',
          'the actor | director has been deleted.',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'the actor | director is safe :)',
          'error'
        )
      }
    })

  }
}
