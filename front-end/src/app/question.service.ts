import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/api/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(baseUrl);
  }
  get(id){
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(question){
    return this.http.post(baseUrl,question);
  }
}
