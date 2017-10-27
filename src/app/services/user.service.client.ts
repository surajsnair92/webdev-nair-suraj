import { User } from '../models/user.model.client';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

import 'rxjs/Rx';
@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice','alice','Alice', 'Wonder'),
    new User('234', 'bob','bob','Bob', 'Marley'),
    new User('345', 'charly','charly','Charly', 'Garcia'),
    new User('456', 'jannunzi','jannunzi','Jose', 'Annunzi')
  ];

  constructor(private http:Http){}
  baseUrl = environment.baseUrl;

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

  createUser(username, password, firstName, lastName){
    // console.log(this.users.push(new User('001',username, password, firstName, lastName)))
    // this.users.push(new User('001', username, password, firstName, lastName));
    // return this.users.find(function (user) {
    //   return user.username === username
    // })
    const url = this.baseUrl+'/api/user';

    return this.http.post(url,{
      '_id': '997',
      'username': username,
      'password': password,
      'firstName': firstName,
      'lastName': lastName
    })
      .map((response: Response) => {
        return response.json()
      });
  }

  updateUser(user: User){
    const url = this.baseUrl+'/api/user/'+user._id;
    return this.http.put(url, user)
      .map((response: Response) => {
        return response.json()
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

  }

  deleteUser(userId){
    const url = this.baseUrl+ '/api/user/'+userId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json()
      });
  }
}
