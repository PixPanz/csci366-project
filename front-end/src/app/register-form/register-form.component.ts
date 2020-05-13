import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  constructor(private router: Router) { }

  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onClick() {
    if (this.registerForm.value.username != '' && this.registerForm.value.password != ''){
      alert("Registration Successful");
      this.router.navigate(['/Index']);
    } else { alert("Please enter values!")}
    }

}
