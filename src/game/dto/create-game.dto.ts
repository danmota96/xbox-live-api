import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

export class CreateGameDto{
  @IsString()
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Forza 7',
  })
  title: string;

  @ApiProperty({
    description: 'Descrição do jogo',
    example: 'História, etc.',
  })
  description: string;

  @IsString()
  @ApiProperty({
    description: 'Gênero do jogo',
    example: 'Corrida, ação, aventura',
  })
  genreName: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  @ApiProperty({
    description: 'Preço do jogo',
    example: '199.00',
  })
  price: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Ano de lançamento do jogo',
    example: '2019',
  })
  year: number;

  @IsUrl()
  @ApiProperty({
    description: 'Link do trailer do jogo',
    example: 'https://www.youtube.com/watch?v=nmwA7JkXlr8',
  })
  TrailerYouTubeUrl: string;

  @IsUrl()
  @ApiProperty({
    description: 'Link de gameplay do jogo',
    example: 'https://www.youtube.com/watch?v=WxTLf3Ht-Os',
  })
  GameplayYouTubeUrl: string;

  @IsNumber()
  @ApiProperty({
    description: 'Score do jogo no Imdb',
    example: '0 a 5 (retirar as aspas ao registrar)',
  })
  ImdbScore: number;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do jogo',
    example: 'https://m.media-amazon.com/images/I/71RTZKIq4bL._AC_SX342_.jpg',
  })
  image: string;

}
