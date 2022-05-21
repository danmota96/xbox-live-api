import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule} from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //validação
  app.useGlobalPipes(new ValidationPipe());

  //swagger
  const config = new DocumentBuilder()
    .setTitle('Xbox Live ')
    .setDescription('Aplicação para gestão de rotas do projeto')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('game')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(4444);
}
bootstrap();
