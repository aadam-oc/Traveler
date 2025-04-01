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

  generateHaiku(prompt: string): Observable<any> {
    console.log('Prompt:', prompt); // Log the prompt to the console
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    const body = {
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a poet." },
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

  getHaiku(): Observable<{ choices: { message: { content: string } }[] }> {
    // Mock response for demonstration purposes
    return of({
      choices: [
        {
          message: {
            content: 'An old silent pond...\nA frog jumps into the pond—\nSplash! Silence again.',
          },
        },
      ],
    });
  }
}