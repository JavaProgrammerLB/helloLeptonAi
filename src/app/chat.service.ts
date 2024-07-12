import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private BASE_URL = '/run';

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<string> {
    const body = {
      do_sample: true,
      inputs: message,
      max_new_tokens: 50,
      top_k: 50,
      top_p: 0.95
    }

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      'accept': 'application/json',
      "Authorization": "Bearer 请提供token"
    });

    return this.http.post<string>(this.BASE_URL, body, {
      headers: headers
    });
  }
}
