import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = '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'; 

  constructor(private http: HttpClient) { }

  ggenerateResponse(prompt: string): Observable<any> {
    console.log('Prompt:', prompt); // Log the prompt to the console
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });
  
    const body = {
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7
    };
  
    return this.http.post(this.apiUrl, body, { headers }).pipe(
      delay(1000),
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError(() => error);
      })
    );
  }
}