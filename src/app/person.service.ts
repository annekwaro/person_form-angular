import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiUrl = 'https://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getPersons(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/people/');
  }

  getPeople(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/people/');
  }

  getPerson(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }

  createPerson(person: Person): Observable<any> {
    return this.http.post(this.apiUrl, person);
  }

  updatePerson(id: number, person: Person): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, person);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
