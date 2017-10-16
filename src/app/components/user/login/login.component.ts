import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import {User} from "../../../models/user.model.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private userService: UserService,
              private router: Router) { }

  login(username: String, password: String){
    const user: User = this.userService.findUserByCredentials(username, password);
    if(user){
        this.router.navigate(['/profile', user._id]);
    }


  }
  ngOnInit() {
  }

}
