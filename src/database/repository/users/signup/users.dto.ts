import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UsersDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email!: string;
}
