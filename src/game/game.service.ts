import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { User } from 'src/user/entities/user.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany({
      include: {
        genre: true,
      },
    });
  }

  async findById(id: string) {
    const record = await this.prisma.game.findUnique({
      where: { id },
      include: {
        genre: true,
      },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o ID: '${id}' não encontrado`);
    }
    return record;
  }

  async create(user: User, dto: CreateGameDto) {
    if (user.isAdmin) {
      const data: Prisma.GameCreateInput = {
        title: dto.title,
        description: dto.description,
        price: dto.price,
        year: dto.year,
        image: dto.image,
        TrailerYouTubeUrl: dto.TrailerYouTubeUrl,
        GameplayYouTubeUrl: dto.GameplayYouTubeUrl,
        ImdbScore: dto.ImdbScore,
        genre: {
          connect: {
            genre: dto.genreName,
          },
        },
      };
      return await this.prisma.game.create({
        data,
        include: {
          genre: true,
        },
      });
    } else {
      throw new UnauthorizedException(
        'Usuário não autorizado. Contate o Administrador!',
      );
    }
  }

  async update(user: User, id: string, dto: UpdateGameDto) {
    if (user.isAdmin) {
      const gameChosen = await this.findById(id);
      const data: Prisma.GameUpdateInput = {
        title: dto.title,
        description: dto.description,
        price: dto.price,
        year: dto.year,
        image: dto.image,
        TrailerYouTubeUrl: dto.TrailerYouTubeUrl,
        GameplayYouTubeUrl: dto.GameplayYouTubeUrl,
        ImdbScore: dto.ImdbScore,
        genre: {
          disconnect: {
            genre: gameChosen.genre[0].genre,
          },
          connect: {
            genre: dto.genreName,
          },
        },
      };
      return this.prisma.game.update({
        where: { id },
        data,
        include: {
          genre: true,
        },
      });
    } else {
      throw new UnauthorizedException(
        'Usuário não autorizado. Contate o Administrador!',
      );
    }
  }

  async delete(user: User, id: string) {
    if (user.isAdmin) {
      await this.findById(id);
      await this.prisma.game.delete({ where: { id } });
    } else {
      throw new UnauthorizedException(
        'Usuário não autorizado. Contate o Administrador!',
      );
    }
  }
}
