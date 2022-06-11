import { Controller, Get, Param} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HomepageService } from './homepage.service';

@ApiTags('homepage')
@Controller('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.homepageService.findAll(id);
  }
}
