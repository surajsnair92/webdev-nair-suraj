import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {SharedService} from "../../../services/shared.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: String;
  password: String;
  errorFlag: Boolean;
  errorMsg: String;

  constructor(private userService: UserService,
              private sharedService:SharedService,
              private router: Router) { }
  login() {
    this.username = this.username;
    this.password = this.password;
    this.userService.login(this.username, this.password)
      .subscribe((user: any) => {
          this.errorFlag = false;
          this.sharedService.user = user;
          this.router.navigate(['/user']);
        },
        (error: any) => {
          this.errorFlag = true;
          this.errorMsg = error;
        });
  }
  // login(username: String, password: String){
  //
  //   this.userService
  //     .login(this.username, this.password)
  //     .subscribe((user) =>{
  //     this.sharedService.user = user;
  //     console.log(user);
  //       this.router.navigate(['/user']);
  //       })
  //
  //   // this.userService.findUserByCredentials(username, password)
  //   // // this.userService.findUserByUsername(username)
  //   //   .subscribe((user: User) => {
  //   //     if(user){
  //   //       this.router.navigate(['/user', user._id]);
  //   //     }
  //   //   });
  // }
  ngOnInit() {
  }

}
