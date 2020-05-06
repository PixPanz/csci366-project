import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Quiz, QuizQuestions } from '../Quiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  quiz: Quiz[];
  questions: QuizQuestions[];


  constructor(
    private route: ActivatedRoute,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.getQuizzes();
  }

  getQuizzes(): void {
    this.userService.getQuizzes().subscribe(quiz => this.quiz = quiz);
  }
}
