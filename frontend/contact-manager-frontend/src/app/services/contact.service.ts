import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://localhost:5001/api/Contacts';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  // Obter todos os contatos
  getContacts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<any[]>('getContacts', []))
      );
  }

  // Obter contato por ID
  getContact(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>(`getContact id=${id}`))
      );
  }

  // Salvar um novo contato
  saveContact(contact: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contact, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('saveContact'))
      );
  }

  // Atualizar um contato existente
  updateContact(id: string, contact: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, contact, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateContact'))
      );
  }

  // Excluir contato pelo ID
  deleteContact(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('deleteContact'))
      );
  }

  // Método auxiliar para tratar erros da API
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);  // Log de erro no console
      return of(result as T);  // Continua a aplicação retornando um resultado vazio
    };
  }
}
