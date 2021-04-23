import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName!:string;
  password!:string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm:NgForm)
  {
    console.log(loginForm.value);
    this.userName = loginForm.value.username
    this.password = loginForm.value.password

    this.authService.login(this.userName, this.password)
       .subscribe( data => {
          console.log("Is Login Success: " + data);

         if(data){
            this.router.navigate(['/hotels']);
         }else{
          alert("Invalid username or password")
         }
    });
  }
}
