import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl } from "class-validator";

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'O nome usado para o perfil',
    example: 'DanielMotas123',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'ID do Usuário (admin)',
    example: '88bea88b-29cc-47d0-b587-8e0a6820a3c8',
  })
  userId: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do Perfil',
    example: 'https://avatars.githubusercontent.com/u/97922515?v=4',
  })
  image: string;
  
  gameId?: string;
}
