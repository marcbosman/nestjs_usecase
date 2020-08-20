import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [{
    id: 1,
    email: 'john@delcom.nl'
  },
  {
    id: 2,
    email: 'jane@delcom.nl'
  }];

  getUsers() {
    return this.users;
  }

  createUser(user) {
    this.users = [...this.users, {...user}];
  }

}
