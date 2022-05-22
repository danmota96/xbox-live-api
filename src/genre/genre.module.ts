import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { GenreController } from "./genre.controller";
import { GenreService } from "./genre.service";

@Module({
  imports: [PrismaModule],
  controllers: [GenreController],
  /* providers irão forcener o conteúdo */
  providers: [GenreService],
})
export class GenreModule {}
