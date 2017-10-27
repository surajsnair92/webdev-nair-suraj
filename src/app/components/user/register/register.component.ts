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

    this.userService.createUser(username, password, firstName, lastName)
      .subscribe((user: User) => {
        if(user){
          this.router.navigate(['/profile', user._id]);
        }
      });
  }

  ngOnInit() {

  }
}
