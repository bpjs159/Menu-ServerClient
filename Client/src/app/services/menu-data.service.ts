/**
 * Menu data service to get data from server.
 * Author: Sebastian Bonilla
 * 04/03/2020
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const endpoint = 'http://localhost:3010';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class MenuDataService {
  constructor(private http: HttpClient) {   
  }

  private capture(res: Response) {
    return res || { };
  }

  getData(): Observable<any> {
    return this.http.get(endpoint).pipe(map(this.capture));
  }
}




