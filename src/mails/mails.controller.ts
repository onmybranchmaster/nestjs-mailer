import { Controller, Post } from '@nestjs/common';
import { MailsService } from './mails.service';

@Controller('mails')
export class MailsController {
  constructor(private readonly mailsService: MailsService) {}

  @Post()
  async sendMail(): Promise<any> {
    return this.mailsService.sendMail();
  }
}
