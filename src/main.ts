import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //swagger

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Xbox Live ')
    .setDescription('Aplicação para gestão de rotas do projeto')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('game')
    .addTag('user')
<<<<<<< Updated upstream
=======
    .addTag('profile')
    .addBearerAuth()
>>>>>>> Stashed changes
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4444);
}
bootstrap();
