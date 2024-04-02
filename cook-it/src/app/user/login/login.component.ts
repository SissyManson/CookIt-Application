import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  login(): void {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
    console.log('logged in');
    this.userService
      .login(email!, password!)
      .subscribe(() => this.router.navigate(['/recipes']));
  }
}
