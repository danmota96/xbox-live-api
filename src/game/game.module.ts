import { Module } from "@nestjs/common";
import { GameController } from "./game.controller";

@Module({
  controllers: [GameController],
  /* providers irão forcener o conteúdo */
  providers: [],
})
export class GameModule {}
