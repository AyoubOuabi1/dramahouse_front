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
