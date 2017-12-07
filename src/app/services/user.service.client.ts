import { User } from '../models/user.model.client';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Response, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import {SharedService} from "../services/shared.service"

import 'rxjs/Rx';
@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice','alice','Alice', 'Wonder'),
    new User('234', 'bob','bob','Bob', 'Marley'),
    new User('345', 'charly','charly','Charly', 'Garcia'),
    new User('456', 'jannunzi','jannunzi','Jose', 'Annunzi')
  ];

  constructor(private http:Http,
              private router: Router,
              private sharedService: SharedService){}
  options: RequestOptions = new RequestOptions();
  baseUrl = environment.baseUrl;

  register(username, password){
    const url = this.baseUrl+'/api/register';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  login(username,password){
    const url = this.baseUrl+'/api/login';
    const credentials = {
    username: username,
    password: password
  };
  this.options.withCredentials = true;
  return this.http.post(url,credentials, this.options)
    .map((response: Response) => {
      return response.json();
    });
}

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map((res: Response) => {
          return res;
        });
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map((res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user;
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        });
  }

  findUserByCredentials(username, password){
    // return this.users.find(function (user) {
    //   return user.username === username && user.password === password;
    // });
    const url = this.baseUrl+'/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json()
      });
  }

  findUserById(userId){
    const url = this.baseUrl+'/api/user/'+userId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json()
      });
  }

  createUser(user){
    // console.log(this.users.push(new User('001',username, password, firstName, lastName)))
    // this.users.push(new User('001', username, password, firstName, lastName));
    // return this.users.find(function (user) {
    //   return user.username === username
    // })
    const url = this.baseUrl+'/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
      return response.json();
      })
  }

  updateUser(user: User){
    const url = this.baseUrl+'/api/user/'+user._id;
    return this.http.put(url, user)
      .map((response: Response) => {
        return response.json();
      })
  }

  findUserByUsername(username){
    // return this.users.find(function (user) {
    //   return user.username === username;
    // })
    const url = this.baseUrl+ '/api/user?username=' + username;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json()
      });
    //


  }

  deleteUser(userId){
    const url = this.baseUrl+ '/api/user/'+userId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json()
      });
  }
}
