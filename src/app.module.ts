import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { GenreModule } from './genre/genre.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
<<<<<<< Updated upstream

@Module({
  imports: [GameModule, GenreModule, PrismaModule, UserModule],
=======
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [GameModule, GenreModule, PrismaModule, UserModule, AuthModule, ProfileModule],
>>>>>>> Stashed changes
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
