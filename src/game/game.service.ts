import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateGameDto } from "./dto/create-game.dto";
import { Game } from "./entities/game.entity";

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService){};
/*...Promise<Game[]> gera erro, corrigir */
  findAll() {
    return this.prisma.game.findMany();
  }

  findOne(id: string): Promise<Game> {
    return this.prisma.game.findUnique({where: { id } } );
  }
/* TO-DO - corrigir validações */ /*...Promise<Game[]> gera erro, corrigir */
  create(dto: CreateGameDto) {
    const data:Game = {...dto}

    return this.prisma.game.create({data});
  }

}
