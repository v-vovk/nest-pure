import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('User Controller')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({
    summary: 'user creation',
  })
  @ApiResponse({
    status: 200,
    type: User,
  })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({
    summary: 'Return all users',
  })
  @ApiResponse({
    status: 200,
    type: [User],
  })
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }
}
