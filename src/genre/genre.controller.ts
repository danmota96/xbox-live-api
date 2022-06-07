import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { GenreService } from './genre.service';
import { ApiBearerAuth, ApiOAuth2, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Genre } from './entities/genre.entity';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('genre')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os gêneros',
  })
  findAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um gênero pelo seu ID',
  })
  findOne(@Param('id') id: string): Promise<Genre> {
    return this.genreService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Registrar um novo gênero',
  })
  create(@Body() dto: CreateGenreDto): Promise<Genre> {
    return this.genreService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um gênero pelo seu ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGenreDto): Promise<Genre> {
    return this.genreService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um gênero pelo seu ID',
  })
  delete(@Param('id') id: string) {
    this.genreService.delete(id);
  }
}
