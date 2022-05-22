import { ApiProperty } from '@nestjs/swagger';

export class CreateGenreDto{
  @ApiProperty({
    description: 'Gênero do jogo',
    example: 'Ação, Corrida, RPG',
  })
  genre: string;
}
