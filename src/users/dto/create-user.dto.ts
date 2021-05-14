import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'wolfykey@gmail.com',
    description: 'user email',
  })
  @IsString({ message: 'Must be a string!' })
  @IsEmail({}, { message: 'Not valid email!' })
  readonly email: string;

  @ApiProperty({
    example: 'VERY1029384756Hard-passWoRd',
    description: 'user password',
  })
  @IsString({ message: 'Must be a string!' })
  @Length(6, 16, { message: 'Min 4 symbols, max - 16' })
  readonly password: string;
}
