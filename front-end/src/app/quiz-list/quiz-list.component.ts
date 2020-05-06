import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz, QuizQuestions } from '../Quiz';
import { UserService } from '../user.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  quiz: Quiz[];
  questions: QuizQuestions[];

  quizzes: any;
  currentQuiz = null;
  currentIndex = -1;
  quizName = '';

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.retrieveQuizzes();
  }

  retrieveQuizzes(){
    this.quizService.getAll()
    .subscribe(
      data => {
        this.quizzes = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  refreshList() {
    this.retrieveQuizzes();
    this.currentQuiz = null;
    this.currentIndex = -1;
  }

  setActiveQuiz(quiz, index){
    this.currentQuiz = quiz;
    this.currentIndex = index;
  }
}
