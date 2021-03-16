import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  public url = 'http://localhost:3010/people';
  constructor(private http: HttpClient) {}

  save(email: string, password: string): Observable<any> {
    console.log('Input : ', email, password);
    return this.http.post<any>(
      this.url,
      { email: email, password: password },
      { observe: 'body' }
    );
  }
}
