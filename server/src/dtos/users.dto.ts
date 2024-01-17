import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsMobilePhone,
} from 'class-validator';

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
  public fullName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public password: string;

  @IsString()
  @IsMobilePhone()
  @IsNotEmpty()
  @MinLength(10)
  public phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  public address: string;
}
