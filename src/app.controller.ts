import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAppStatus(): string {
    return 'Server is running! \n Please check http://localhots:4444/api for Swagger docs...';
  }
}
