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
import { CreateGameDto } from './dto/create-game.dto';
import { GameService } from './game.service';
import { ApiBearerAuth, ApiOAuth2, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Game } from './entities/game.entity';
import { UpdateGameDto } from './dto/update-game.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from 'src/user/entities/user.entity';

@ApiTags('game')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os jogos',
  })
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um jogo',
  })
  findById(@Param('id') id: string): Promise<Game> {
    return this.gameService.findById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Registrar um novo jogo',
  })
  create(@LoggedUser() user: User, @Body() dto: CreateGameDto): Promise<Game> {
    return this.gameService.create(user, dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um jogo pelo seu ID',
  })
  update(@LoggedUser() user: User, @Param('id') id: string, @Body() dto: UpdateGameDto): Promise<Game> {
    return this.gameService.update(user, id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um jogo pelo seu ID',
  })
  delete(@LoggedUser() user: User, @Param('id') id: string) {
    this.gameService.delete(user, id);
  }
}
