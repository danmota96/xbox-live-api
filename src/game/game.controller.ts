import { Controller, Get, Post } from "@nestjs/common";
import { GameService } from "./game.service";

@Controller('game')
export class GameController{

  constructor(private gameservice: GameService){}

  @Get()
  findAll(){
    return this.gameservice.findAll();
  }

  @Post()
  create() {
    return this.gameservice.create();
  }
}
