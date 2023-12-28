import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailsModule } from './mails/mails.module';

@Module({
  imports: [MailsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
