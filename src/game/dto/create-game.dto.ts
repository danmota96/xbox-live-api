import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateGameDto{
  @IsString()
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Forza 7',
  })
  name: string;

  @ApiProperty({
    description: 'Descrição do jogo',
    example: 'História, etc.',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Preço do jogo',
    example: "199.00",
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do jogo',
    example: 'https://m.media-amazon.com/images/I/71RTZKIq4bL._AC_SX342_.jpg',
  })

  image: string;
}
