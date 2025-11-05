import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dtos/user.dto';

@Controller()
@Controller('users')
export class UserController {
  // constructor(private readonly userService: UserService) {}
  //
  // @Post('create')
  // async createUser(@Body() data: UserDto) {
  //   return this.userService.createUser(data);
  // }
}
