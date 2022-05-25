import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl, Matches, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Login do usuário no Xbox Live',
    example: 'danielmotas',
  })
  nickname: string;

  @IsString()
  @ApiProperty({
    description: 'Nome de usuário. Apenas para exibição',
    example: 'Daniel Mota',
  })
  name: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário',
    example: '@abcd123',
  })
  password: string;
  @ApiProperty({
    description: 'A confirmação da senha deve ser igual a senha',
    example: 'Abcd@1234',
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil do usuário',
    example: 'https://avatars.githubusercontent.com/u/97922515?v=4',
  })
  image: string;
}
