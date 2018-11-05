import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  usersMock = [{ Name: 'User1', Id: 1, Email: 'User1@gmail.com' },
  { Name: 'User2', Id: 2, Email: 'User2@gmail.com' },
  { Name: 'User3', Id: 3, Email: 'User3@gmail.com' },
];

  constructor() { }

  getUsers(): {}[] {
    return this.usersMock;
  }

}



