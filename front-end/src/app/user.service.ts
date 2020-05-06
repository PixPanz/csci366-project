import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz, QuizQuestions } from './Quiz';
import { catchError, retry, tap } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'api/users';
  private quizUrl = 'api/quizzes';
  private questionsUrl = 'api/questions';

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }
  
  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.quizUrl).pipe(tap((_) => console.log('fetched quizzes')));
  }

  getQuiz(id: number): Observable<Quiz> {
    const url = `${this.quizUrl}/?question.id=${id}`
    return this.http.get<Quiz>(this.quizUrl).pipe(tap((_) => console.log('fetched quiz')));
  }

  /** 
   * Unfinished function not sure how to retrieve all the questions in the quiz db
  getQuestions(): Observable<QuizQuestions[]> {
    return this.http.get<QuizQuestions>(this.questionsUrl)
    
  }
  */

  searchQuiz(term: string): Observable<Quiz[]> {
    if (!term.trim()) {
      return of([])
    }
    return this.http.get<Quiz[]>(`${this.quizUrl}/?quizName=${term}`).pipe(tap((_) => console.log('fetched quizzes')));
  }


  addQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.quizUrl, quiz, this.httpOptions).pipe(tap((newQuiz: Quiz) => console.log(`added quiz w/ quiz.quizId=${newQuiz.quizId}`)))
  }
  
}
