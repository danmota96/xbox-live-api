import { Injectable } from "@nestjs/common";
import { CreateGameDto } from "./dto/create-game.dto";
import { Game } from "./entities/game.entity";

@Injectable()
export class GameService {

  games: Game[] = [];

  findAll() {
    return this.games;
  }

  create(createGameDto: CreateGameDto) {
    const game:
     Game = {
       id: 'random_id',
       nome: 'random_nome',
       descricao: 'random_desc',
       ...createGameDto
  }

    this.games.push(game);

    return game;
  }

}
