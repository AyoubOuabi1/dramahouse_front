import {Injectable} from "@angular/core";
import {PersonService} from "../../service/person/person.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadAllPersons, loadAllPersonsFailure, loadAllPersonsSuccess} from "./person-action";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class PersonEffect{
    constructor(private personService : PersonService,
                private actions$  : Actions) {}

    // Add the effect here
    loadAllPersons$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(loadAllPersons),
        mergeMap(() => this.personService.getAllPersons().pipe(
          map(persons => loadAllPersonsSuccess({persons})),
          catchError((errorMessage) => [loadAllPersonsFailure({errorMessage})])
        ))
      );
    });

    loadPersonById$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(loadAllPersons),
        mergeMap(() => this.personService.getAllPersons().pipe(
          map(persons => loadAllPersonsSuccess({persons})),
          catchError((errorMessage) => [loadAllPersonsFailure({errorMessage})])
        ))
      );
    });

    addPerson$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(loadAllPersons),
        mergeMap(() => this.personService.getAllPersons().pipe(
          map(persons => loadAllPersonsSuccess({persons})),
          catchError((errorMessage) => [loadAllPersonsFailure({errorMessage})])
        ))
      );
    });

    updatePerson$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(loadAllPersons),
        mergeMap(() => this.personService.getAllPersons().pipe(
          map(persons => loadAllPersonsSuccess({persons})),
          catchError((errorMessage) => [loadAllPersonsFailure({errorMessage})])
        ))
      );
    });

    deletePerson$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(loadAllPersons),
        mergeMap(() => this.personService.getAllPersons().pipe(
          map(persons => loadAllPersonsSuccess({persons})),
          catchError((errorMessage) => [loadAllPersonsFailure({errorMessage})])
        ))
      );
    });
}
