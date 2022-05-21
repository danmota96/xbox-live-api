import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateGameDto } from "./dto/create-game.dto";
import { GameService } from "./game.service";
import { ApiOAuth2, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Game } from "./entities/game.entity";


@ApiTags('game')
@Controller('game')
export class GameController{

  constructor(private readonly gameService: GameService){}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os jogos'
  })
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um jogo'
  })
  findOne(@Param('id') id: string): Promise<Game>{
    return this.gameService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Registrar um novo jogo'
  })
  create(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.gameService.create(createGameDto);
  }
}
