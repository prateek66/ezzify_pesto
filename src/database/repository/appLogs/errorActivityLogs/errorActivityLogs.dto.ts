import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class ErrorActivityLogsDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(23)
  activityDateTime!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  deviceDetails!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  errorMethod!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  endPoint!: string;

  @IsNumber()
  @IsNotEmpty()
  errorCode!: number;

  @IsNumber()
  @IsNotEmpty()
  statusCode!: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  responseTime!: string;

  @IsString()
  @IsNotEmpty()
  errorDetails!: string;

  @IsString()
  @IsNotEmpty()
  transactionsDetails!: string;
}
