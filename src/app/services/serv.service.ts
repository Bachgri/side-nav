import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private Http:HttpClient) { }

  create(data:any){
    return this.Http.post<any>("http://localhost:85/Authentification/Creation", data);
  }

  login(data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    }); 
    return this.Http.post<any>("http://localhost:85/Authentification/Login", data ,{ headers });
  }
}
