import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/api/quizzes'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(baseUrl);
  }
  get(id){
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(quiz){
    return this.http.post(baseUrl,quiz);
  }
}
