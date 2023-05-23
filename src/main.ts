import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  /*await app.listen(process.env.PORT);*/

  const config = new DocumentBuilder()
  .setTitle('BusApp API')
  .setDescription('API dành cho ứng dụng BusApp. Được thiết kế bởi nhóm 1 dành cho bài tập lớn số 3 của môn Phát triển ứng dụng cho thiết bị di động.')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
}
bootstrap();
