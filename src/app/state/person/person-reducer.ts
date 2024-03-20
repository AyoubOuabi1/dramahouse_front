import { createReducer, on } from '@ngrx/store';
import * as PersonActions from './person-action';
import { Person } from '../../entities/person';

export interface PersonState {
  persons: Person[];
  selectedPerson: Person | null;
  error: string | null;
}

export const initialState: PersonState = {
  persons: [],
  selectedPerson: null,
  error: null,
};

export const personReducer = createReducer(
  initialState,

  on(PersonActions.loadAllPersonsSuccess, (state, { persons }) => ({
    ...state,
    persons,
    error: null
  })),

  on(PersonActions.loadAllPersonsFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),

  on(PersonActions.loadPersonByIdSuccess, (state, { person }) => ({
    ...state,
    selectedPerson: person,
    error: null
  })),

  on(PersonActions.loadPersonByIdFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),

  on(PersonActions.addPersonSuccess, (state, { person }) => ({
    ...state,
    persons: [...state.persons, person],
    error: null
  })),

  on(PersonActions.addPersonFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),

  on(PersonActions.updatePersonSuccess, (state, { person }) => {
    const updatedPersons = state.persons.map(p => p.id === person.id ? person : p);
    return {
      ...state,
      persons: updatedPersons,
      error: null
    };
  }),

  on(PersonActions.updatePersonFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),

  on(PersonActions.deletePersonSuccess, (state, { id }) => ({
      ...state,
      persons: state.persons.filter(p => p.id !== id),
      error: null

  })),

  on(PersonActions.deletePersonFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  })),

  on(PersonActions.findPersonByNameSuccess, (state, { persons }) => ({
    ...state,
    persons,
    error: null
  })),

  on(PersonActions.findPersonByNameFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage
  }))

);
