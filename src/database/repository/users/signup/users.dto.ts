import { IsEmail, IsIn, IsNotEmpty, IsString } from "class-validator";

export class UsersDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsIn(["user", "vendor"])
  @IsString()
  @IsNotEmpty()
  roles!: string;
}
