import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import {User} from "../../../models/user.model.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : User;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  constructor(private userService: UserService,
              private router: Router) { }

  register(username: String, password: String, firstName: String, lastName: String){
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName
    this.userService.findUserByUsername(username)
      .subscribe((user: User) => {
        console.log(user);
        if(user === null){
          // this.router.navigate(['/profile', user._id])
          const newUser = {
            username : this.username,
            password : this.password,
            firstName : this.firstName,
            lastName : this.lastName
          };
          this.userService.createUser(newUser)
            .subscribe((userFromServer) => {
              this.router.navigate(['/user', userFromServer._id]);
            })
        }
      });
    // this.userService.createUser(username, password, firstName, lastName)
    //   .subscribe((user: User) => {
    //     if(user){
    //       this.router.navigate(['/profile', user._id]);
    //     }
    //   });
  }

  ngOnInit() {

  }
}
