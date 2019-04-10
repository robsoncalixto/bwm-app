import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rental } from './rental.model';

@Injectable({
  providedIn: 'root'
})

export class RentalService {
  uri: string = 'http://localhost:3000/api/v1/rentals/';
  
  constructor(private http: HttpClient) { }

  public getRentalById(id:string): Observable<any>{
      return this.http.get(this.uri + id) ;
  }

  public getRentals(): Observable<any> {
    return this.http.get(this.uri);
  }
}
