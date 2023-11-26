import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminProfServiceService {
  constructor(private http: HttpClient) {}
  getAllProfs(): Observable<any[]> {
    return this.http.get<any>('http://localhost:85/admin/profs');
  }
}
