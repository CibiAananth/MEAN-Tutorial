import { Container } from 'typedi';

export default class MailerService {
  constructor() {
    this.emailClient = Container.get('emailClient');
  }

  sendWelcomeEmail(email) {
    const data = {
      from: 'Cibi Aananth <support@cibiaananth.com>',
      to: email, // your email address
      subject: 'Welcome',
      text: 'Welcome onboarding!',
    };
    const delivery = this.emailClient.messages().send(data);
    console.log('delivery', delivery);
    return { delivered: 1, status: 'ok' };
  }
}
