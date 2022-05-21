import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateGameDto } from "./dto/create-game.dto";
import { GameService } from "./game.service";
import { ApiTags } from '@nestjs/swagger';


@ApiTags('game')
@Controller('game')
export class GameController{

  constructor(private readonly gameService: GameService){}

  @Get()
  findAll(){
    return this.gameService.findAll();
  }

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }
}
