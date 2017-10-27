import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

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
    this.userService.findUserByCredentials(username, password)
    // this.userService.findUserByUsername(username)
      .subscribe((user: User) => {
        if(user){
          this.router.navigate(['/user', user._id]);
        }
      });
  }
  ngOnInit() {
  }

}
