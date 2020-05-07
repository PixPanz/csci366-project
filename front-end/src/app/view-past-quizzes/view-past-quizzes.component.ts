import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
@Component({
  selector: 'app-view-past-quizzes',
  templateUrl: './view-past-quizzes.component.html',
  styleUrls: ['./view-past-quizzes.component.css']
})
export class ViewPastQuizzesComponent implements OnInit {

  pastQuizzes: number[] = [];
  quizzes:any[];
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getQuizzes();
  }
  getQuizzes(){
    for(let i = 0; i < this.pastQuizzes.length; i++){this.quizService.get(i)
    .subscribe(
      data => {
        this.quizzes.push(data);
        console.log(data);
      },
      error => {
        console.log(error);
      });
    } 
  }
  addQuiz(id){
    this.pastQuizzes.push(id);
    this.getQuizzes();
  }
}
