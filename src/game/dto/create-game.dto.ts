import { ApiProperty } from '@nestjs/swagger';

export class CreateGameDto{
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Forza 7',
  })
  nome: string;
  @ApiProperty({
    description: 'Descrição do jogo',
    example: 'História, etc.',
  })
  descricao: string;
}
