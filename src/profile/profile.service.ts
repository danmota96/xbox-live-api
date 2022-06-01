import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  async findById(id: string): Promise<Profile> {
    const record = await this.prisma.profile.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ID: '${id}' não encontrado`);
    }

    return record;
  }

  async findOne(id: string): Promise<Profile> {
    return this.findById(id);
  }

  async create(dto: CreateProfileDto): Promise<Profile> {
    const data: Profile = { ...dto };

    return await this.prisma.profile.create({ data: {
      name: data.name,
      image: data.image,
      user: {
        connect: {
          id: data.userId,
        }
      }

    } }).catch(handleError);
  }

  async update(id: string, dto: UpdateProfileDto): Promise<Profile> {
    await this.findById(id);

    const data: Partial<Profile> = { ...dto };

    return this.prisma.profile.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.profile.delete({ where: { id } });
  }
}
