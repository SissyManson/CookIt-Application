import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private userService: UserService) {}

  get isLoggedUser(): boolean {
    return this.userService.isLoggedUser;
  }
}
