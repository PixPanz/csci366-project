import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { QuizService } from '../quiz.service';
import { Question } from '../question';
import { Quiz } from '../Quiz';
export type EditorType = 'Question' | 'Name';
@Component({
  selector: 'app-quiz-creator',
  templateUrl: './quiz-creator.component.html',
  styleUrls: ['./quiz-creator.component.css']
})
export class QuizCreatorComponent implements OnInit {
  toggle: EditorType = 'Question';
  questions: number [] = [];
  counter = 0;
  newQuestion: Question;
  newQuiz: Quiz;
  //switch views
  get showQuestions(){
    return this.toggle === 'Question';
  }
  get showName(){
    return this.toggle === 'Name';
  }
  toggleSwitch(type: EditorType){
    this.toggle = type;
  }
  constructor(private questionService: QuestionService, private quizService: QuizService) { }

  ngOnInit() {
    // this.newQuestion.text = '';
    // this.newQuestion.answers = [];
    // this.newQuestion.correct = '';

  }
  addQuestion(questionText, answ1, answ2, answ3, answ4){
      this.questions.push(this.counter);
      this.newQuestion.text = questionText;
      this.newQuestion.answers.push(answ1);
      this.newQuestion.answers.push(answ2);
      this.newQuestion.answers.push(answ3);
      this.newQuestion.answers.push(answ4);
      this.newQuestion.correct = answ2;
    const data = {
      text: this.newQuestion.text,
      answers: this.newQuestion.answers,

    }
    this.questionService.create(data)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
    this.counter ++;
  }

  addQuiz(name, desc){
    this.newQuiz.quizName = name;
    this.newQuiz.quizDesc = desc;
    this.newQuiz.quizQuestions = this.questions;
    const data = {
      quizName: this.newQuiz.quizName,
      quizDesc: this.newQuiz.quizDesc,
      quizQuestions: this.newQuiz.quizQuestions 
    }
    this.quizService.create(data)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}
