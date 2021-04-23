import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel Booking System';
  isUserLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isUserLoggedIn = this.authService.isValid()
    console.log(`Status : ${this.isUserLoggedIn}`);
  }

}
