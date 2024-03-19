import {createAction, props} from "@ngrx/store";
import {Person} from "../../entities/person";

export const loadAllPersons = createAction(
  '[Person] Load All Persons'
);

export const loadAllPersonsSuccess = createAction(
  '[Person] Load All Persons Success',
   props<{ persons: Person[] }>()
);

export const loadAllPersonsFailure = createAction(
  '[Person] Load All Persons Failure',
  props<{ errorMessage: string }>()
);

export const loadPersonById = createAction(
  '[Person] Load Person By Id',
  props<{ id: number }>()
);

export const loadPersonByIdSuccess = createAction(
  '[Person] Load Person By Id Success',
  props<{ person: Person }>()
);

export const loadPersonByIdFailure = createAction(
  '[Person] Load Person By Id Failure',
  props<{ errorMessage: string }>()
);

export const addPerson = createAction(
  '[Person] Add Person',
  props<{ person: Person }>()
);

export const addPersonSuccess = createAction(
  '[Person] Add Person Success',
  props<{ person: Person }>()
);

export const addPersonFailure = createAction(
  '[Person] Add Person Failure',
  props<{ errorMessage: string }>()
);

export const updatePerson = createAction(
  '[Person] Update Person',
  props<{ person: Person }>()
);

export const updatePersonSuccess = createAction(
  '[Person] Update Person Success',
  props<{ person: Person }>()
);

export const updatePersonFailure = createAction(
  '[Person] Update Person Failure',
  props<{ errorMessage: string }>()
);

export const deletePerson = createAction(
  '[Person] Delete Person',
  props<{ id: number }>()
);

export const deletePersonSuccess = createAction(
  '[Person] Delete Person Success',
  props<{ id: number }>()
);

export const deletePersonFailure = createAction(
  '[Person] Delete Person Failure',
  props<{ errorMessage: string }>()
);

export const findPersonByName = createAction(
  '[Person] Find Person By Name',
  props<{ name: string }>()
);

export const findPersonByNameSuccess = createAction(
  '[Person] Find Person By Name Success',
  props<{ persons: Person[] }>()
);

export const findPersonByNameFailure = createAction(
  '[Person] Find Person By Name Failure',
  props<{ errorMessage: string }>()
);

export const deletePersonById = createAction(
  '[Person] Delete Person By Id',
  props<{ id: number }>()
);

export const deletePersonByIdSuccess = createAction(
  '[Person] Delete Person By Id Success',
  props<{ id: number }>()
);

export const deletePersonByIdFailure = createAction(
  '[Person] Delete Person By Id Failure',
  props<{ errorMessage: string }>()
);
