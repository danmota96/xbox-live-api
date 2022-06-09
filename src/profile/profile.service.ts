import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(){
    return this.prisma.profile.findMany({
      include: {
        user: true,
        game: true,
      }
    });
  }

  async findById(id: string){
    const record = await this.prisma.profile.findUnique({
      where: { id:id },
      include: {
        game: true,
      }
    });

    if (!record) {
      throw new NotFoundException(`Registro com o ID: '${id}' não encontrado`);
    }
    return record;
  }

  async create(dto: CreateProfileDto){
    return await this.prisma.profile
      .create({
        data: {
          name: dto.name,
          image: dto.image,
          userId: dto.userId,
          game: {
            connect: {
              id: dto.gameId,
            },
          },
        },
        include: {
          game: true,
          user: true,
        },
      })
      .catch(handleError);
  }

  async update(id: string, dto: UpdateProfileDto){
    await this.findById(id);

    return this.prisma.profile.update({
      where: { id },
        data: {
        name: dto.name,
        image: dto.image,
        userId: dto.userId,
        game: {
          connect: {
            id: dto.gameId,
          },
        },
      },
      include: {
        game: true,
      }
  });
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.profile.delete({ where: { id } });
  }
}
