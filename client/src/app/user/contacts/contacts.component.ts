import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  get userEmail(): string {
    return this.userService.user?.email || '';
  }

  contactForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/@\w+\.\w+$/gm),
      ],
    ],
    message: ['', [Validators.required, Validators.minLength(5)]],
  });

  ngOnInit(): void {
    this.contactForm.setValue({ email: this.userEmail, message: '' });
  }

  sendMsg() {
    alert('Your message has been sent!');
    this.contactForm.reset();
    this.router.navigate(['/recipes']);
  }
}
