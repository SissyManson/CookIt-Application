import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cookIt';

  hideHeadAndFooter: boolean = true;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (
          event['url'] === '/auth/login' ||
          event['url'] === '/auth/register'
        ) {
          // ! hide header and footer on login/register
          this.hideHeadAndFooter = false;
        } else {
          this.hideHeadAndFooter = true;
        }
      }
    });
  }
}
