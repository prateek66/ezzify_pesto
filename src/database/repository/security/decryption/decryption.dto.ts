import { IsNotEmpty, IsString } from "class-validator";

export class DecryptionDTO {
  @IsString()
  @IsNotEmpty({
    message: "data property should contain encrypted string",
  })
  data!: string;
}
