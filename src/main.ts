import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port: number = parseInt(process.env.PORT, 10) || 3000;
  await app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}
bootstrap();
