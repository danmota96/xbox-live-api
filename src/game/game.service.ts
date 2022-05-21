import { Injectable } from "@nestjs/common";
import { CreateGameDto } from "./dto/create-game.dto";
import { Game } from "./entities/game.entity";

@Injectable()
export class GameService {

  games: Game[] = [];

  findAll() {
    return 'Buscar todos os jogos';
  }
  create(createGameDto: CreateGameDto) {
    const game:
     Game = {
       id: 'random_id',
       nome: 'random_nome',
       descricao: 'random_desc',
       number: 'random_numb',
       ...createGameDto
  }

    this.games.push();

    return game;
  }

}
