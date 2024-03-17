import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../../entities/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = 'http://localhost:8081/api/v1/user/persons';
  constructor(private httpClient: HttpClient) { }

  getAllPersons() : Observable<Person[]> {
    return this.httpClient.get<Person[] >(this.url);
  }

  getPersonById(id: number) : Observable<Person> {
    return this.httpClient.get<Person>(`${this.url}/${id}`);
  }

  addPerson(person: Person) : Observable<Person> {
    return this.httpClient.post<Person>(this.url, person);
  }

  updatePerson(person: Person) : Observable<Person> {
    return this.httpClient.put<Person>(`${this.url}/${person.id}`, person);
  }

  deletePerson(id: number) : Observable<Person> {
    return this.httpClient.delete<Person>(`${this.url}/${id}`);
  }
}
