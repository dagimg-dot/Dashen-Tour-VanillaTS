import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public password: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public fullName: string;

  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public password: string;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public password: string;

  @IsString()
  @IsNotEmpty()
  public phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  public address: string;
}
