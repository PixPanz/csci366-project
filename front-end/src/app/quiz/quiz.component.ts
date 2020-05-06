import { Component, OnInit } from '@angular/core';
import { Quiz, QuizQuestions } from '../Quiz';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: QuizQuestions[];
  quiz: Quiz;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
     ) { }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz() {
    const id = +this.route.snapshot.paramMap.get('quizId')
    this.userService.getQuiz(id).subscribe(quiz => this.quiz = quiz);
  }
}
