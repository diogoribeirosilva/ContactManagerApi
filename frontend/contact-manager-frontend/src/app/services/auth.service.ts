import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials.model';
import { LoginResponse } from '../models/loginResponse.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:5001/api/Account';

  constructor(private http: HttpClient) {}

  // Método para login tipado
  login(credentials: Credentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

  // Método para registro tipado
  register(credentials: Credentials): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, credentials);
  }
}
