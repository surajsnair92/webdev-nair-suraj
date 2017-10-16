import { User } from '../models/user.model.client';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice','alice','Alice', 'Wonder'),
    new User('234', 'bob','bob','Bob', 'Marley'),
    new User('345', 'charly','charly','Charly', 'Garcia'),
    new User('456', 'jannunzi','jannunzi','Jose', 'Annunzi')
  ];


  findUserByCredentials(username, password){
    return this.users.find(function (user) {
      return user.username === username && user.password === password;
    });
  }

  findUserById(userId){
    return this.users.find(function (user) {
      return user._id === userId;
    })
  }

  createUser(username, password, firstName, lastName){
    // console.log(this.users.push(new User('001',username, password, firstName, lastName)))
    this.users.push(new User('001', username, password, firstName, lastName));
    return this.users.find(function (user) {
      return user.username === username
    })
  }

  updateUser(user: User){
    for (let i =0 ; i < this.users.length; i++){
      const _user = this.users[i];
      if(_user._id === user._id){
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
      }
    }
  }

  findUserByUsername(username){
    return this.users.find(function (user) {
      return user.username === username;
    })
  }

  deleteUser(userId){
    this.users.splice(userId,1)
    return this.users
  }
}
