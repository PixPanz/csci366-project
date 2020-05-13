import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private router: Router) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onClick() {
    if (this.loginForm.value.username == "quizUser1") {
      if (this.loginForm.value.password == "somePassword"){
        alert("Login Successful");
        this.router.navigate(['/Index'])
      } else { alert ("Invalid Password")}
    } else { alert ("Invalid Username") }
  }

}
