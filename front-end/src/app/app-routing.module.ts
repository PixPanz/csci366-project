import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component'
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { ViewPastQuizzesComponent } from './view-past-quizzes/view-past-quizzes.component';
import { QuizCreatorComponent } from './quiz-creator/quiz-creator.component';
import { DockerComponent } from './docker/docker.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Quizzes', component: QuizListComponent },
  { path: 'Quiz', component: QuizComponent },
  { path: 'PastQuizzes', component: ViewPastQuizzesComponent },
  { path: 'CreateAQuiz', component: QuizCreatorComponent },
  { path: 'Index', component: DockerComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
