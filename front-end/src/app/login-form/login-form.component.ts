import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  stupid = 'funny haha';

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onClick() {
    if (this.loginForm.value.username == "quizUser1") {
      if (this.loginForm.value.password == "somePassword"){
        alert("Valid Credentials")
      } else { alert ("Invalid Password")}
    } else { alert ("Invalid Username") }
  }

}
