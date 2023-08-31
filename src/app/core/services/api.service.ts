import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    const authToken = 'token';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });

    return { headers };
  }

  post(endpoint: string, data: any): Observable<any> {
    const { headers } = this.getHeaders();
    const url = `${this.apiUrl}/${endpoint}`;

    return this.http.post(url, data, { headers });
  }
}
