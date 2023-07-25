import { User, dataAccess } from '@escola-de-ti/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string) {
    dataAccess()
    return this.users.find(user => user.username === username);
  }
}
