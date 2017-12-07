import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client'
import {SharedService} from "../../../services/shared.service"
import {User} from "../../../models/user.model.client";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId : String;
  username: String;
  firstName: String;
  lastName: String;
  user : User;
  constructor(private userService: UserService,
              private sharedService: SharedService,
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
  logout(){
    this.userService.logout()
      .subscribe((status) => {
        this.router.navigate(['/login']);
      })
  }
  ngOnInit() {
    this.username = this.sharedService.user.username;
    this.firstName = this.sharedService.user.firstName;
    this.userId = this.sharedService.user._id;
    this.lastName = this.sharedService.user.lastName;
  }

}


  //   this.route.params.subscribe(params => {
  //     this.userId = params['userId'];
  //
  //     this.userService.findUserById(this.userId)
  //       .subscribe((user: User) => {
  //         if(user){
  //           this.user = user;
  //           this.firstName = user.firstName;
  //             console.log(user);
  //             this.router.navigate(['/user', user._id]);
  //         }
  //       });
  //
  //     // alert(this.userId)
  //   })
  // }


