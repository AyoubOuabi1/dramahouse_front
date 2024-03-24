import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../../entities/person";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = environment.apiUrl+"persons";

  constructor(private httpClient: HttpClient) { }

  getAllPersons() : Observable<Person[]> {
    return this.httpClient.get<Person[] >(this.apiUrl);
  }

  getPersonById(id: number) : Observable<Person> {
    return this.httpClient.get<Person>(`${this.apiUrl}/${id}`);
  }

  addPerson(person: FormData) : Observable<Person> {
    return this.httpClient.post<Person>(this.apiUrl, person);
  }

  updatePerson(person: Person) : Observable<Person> {
    return this.httpClient.put<Person>(`${this.apiUrl}/${person.id}`, person);
  }

  deletePerson(id: number) : Observable<Person> {
    return this.httpClient.delete<Person>(`${this.apiUrl}/${id}`);
  }

  searchPersonByName(name: string) : Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.apiUrl}/search?name=${name}`);
  }
}
