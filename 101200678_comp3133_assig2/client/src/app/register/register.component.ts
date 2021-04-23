import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


const CREATE_USER = gql`
  mutation createUser(
    $user_id: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    user(user_id: $user_id, username: $username, email: $email, password: $password) {
      user_id
      username
    }
  }
`;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {user_id:'', username:'',email:'', password:''};
  resp:any = {};
  signupForm: FormGroup;
  user_id: string;
  username: string;
  email: string;
  password: string;



  constructor(private apollo:Apollo, private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      user_id : [null, Validators.required],
      username : [null, Validators.required],
      
      email: [null, Validators.required],
      password : [null, Validators.required],
    })
  }
  get formInput(){
    return this.signupForm.controls;
  }
  onSubmit(form:NgForm){
    const userData = form.value;
    console.log(userData)
    this.apollo.mutate({
      mutation: CREATE_USER,
      variables: {
        user_id: userData.user_id,
        username: userData.username,
        email: userData.email,
       password: userData.password
      },
    
    }).subscribe(({ data }) => {
      
    console.log('got data', data);
    this.router.navigate(['/hotels']);
  }, (error) => {
    console.log('there was an error sending the query', error);
  });
  }
}
