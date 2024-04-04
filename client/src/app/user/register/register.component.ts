import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { matchPassValidator } from 'src/app/shared/utils/matchPass-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  regForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.minLength(5)]],
    passwordGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required, Validators.minLength(5)]],
      },
      {
        validators: [matchPassValidator('password', 'rePassword')],
      }
    ),
  });

  get passwordGroup() {
    return this.regForm.get('passwordGroup');
  }

  register(): void {
    if (this.regForm.invalid) return;

    const {
      username,
      email,
      passwordGroup: { password, rePassword } = {},
    } = this.regForm.value;

    this.userService
      .register(username!, email!, password!, rePassword!)
      .subscribe(() => {
        this.regForm.reset();
        this.router.navigate(['/recipes']);
      });
  }
}
