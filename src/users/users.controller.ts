import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

interface UserDto {
  id: string;
  email: string;
}

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() user: UserDto) {
    console.log('Adding new user: ', user);
    return this.usersService.createUser(user);
  }
}
