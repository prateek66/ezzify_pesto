import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateUsersDto {
  @IsString()
  @IsEmail()
  @IsOptional()
  firstName!: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  lastName!: string;

  @IsNumber()
  @IsEmail()
  @IsOptional()
  mobileNumber!: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  profileImage!: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  city!: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  state!: string;

  @IsBoolean()
  @IsEmail()
  @IsOptional()
  isActive!: string;

  @IsBoolean()
  @IsEmail()
  @IsOptional()
  isEmaiVerified!: string;

  @IsIn(["user", "vendor"])
  @IsString()
  @IsOptional()
  roles!: string;
}
