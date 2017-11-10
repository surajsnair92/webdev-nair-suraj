import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client'
import {User} from "../../../models/user.model.client";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId : String;
  firstName: String;
  user : User;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  updateUser(user){
    this.userService
      .updateUser(user)
      .subscribe((user: User) => {
      console.log(user);
      });
  }
  deleteUser(user){
    this.userService
      .deleteUser(user._id)
      .subscribe((user: User) => {
        this.router.navigate(['/login']);
      });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];

      this.userService.findUserById(this.userId)
        .subscribe((user: User) => {
          if(user){
            this.user = user;
            this.firstName = user.firstName;
              console.log(user);
              this.router.navigate(['/user', user._id]);
          }
        });

      // alert(this.userId)
    })
  }

}
