import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  errMesg = '';
  constructor(private errService: ErrorService) {}

  ngOnInit(): void {
    this.errService.apiError$.subscribe((err: any) => {
      this.errMesg = err?.message || '';
    });
  }
}
