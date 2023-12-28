import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailsService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendMail() {
    try {
      await this.mailerService.sendMail({
        to: this.configService.get('MAIL_TO'),
        from: this.configService.get('MAIL_FROM'),
        subject: 'Testing Nest MailerModule ✔',
        text: 'welcome',
        html: '<b>welcome</b>',
      });

      console.log('Mail sent successfully');
    } catch (error) {
      console.log(error.message || 'Failed to send mail');
      throw new Error(error.message || 'Failed to send mail');
    }
  }
}
