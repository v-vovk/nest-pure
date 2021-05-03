import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'wolfykey@gmail.com',
    description: 'user email',
  })
  readonly email: string;

  @ApiProperty({
    example: 'VERY1029384756Hard-passWoRd',
    description: 'user password',
  })
  readonly password: string;
}
