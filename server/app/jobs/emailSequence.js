import { Container } from 'typedi';
import MailerService from '../services/mailer';

const handler = async job => {
  const Logger = Container.get('logger');
  try {
    Logger.debug('✌️ Email Sequence Job triggered!');
    const { email } = job.attrs.data;
    const mailerServiceInstance = Container.get(MailerService);
    await mailerServiceInstance.SendWelcomeEmail(email);
  } catch (e) {
    Logger.error('🔥 Error with Email Sequence Job: %o', e);
  }
};

export default handler;
