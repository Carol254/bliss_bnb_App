import { Injectable } from '@angular/core';
import { Bnb } from '../models/airbnb';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirbnbService {

  private apiUrl = 'http://localhost:3000/airbnb';

  constructor(private http:HttpClient) { }

  getBnbs():Observable<Bnb[]>{
    return this.http.get<Bnb[]>(this.apiUrl);
    
  }
}
