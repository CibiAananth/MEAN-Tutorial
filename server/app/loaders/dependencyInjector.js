import { Container } from 'typedi';
import mailgun from 'mailgun-js';
import LoggerInstance from './logger';
import agendaFactory from './agenda';
import eventEmitter from '../events/emitter';
import config from '../config';

export default ({ mongoConnection, models }) => {
  try {
    models.forEach(m => {
      Container.set(m.name, m.model);
    });

    const agendaInstance = agendaFactory({ mongoConnection });
    LoggerInstance.info('🔧 Agenda injected into container', agendaInstance);

    Container.set('agendaInstance', agendaInstance);
    Container.set('logger', LoggerInstance);
    Container.set('eventEmitter', eventEmitter);
    Container.set(
      'emailClient',
      mailgun({ apiKey: config.emails.apiKey, domain: config.emails.domain }),
    );
    return { agenda: agendaInstance };
  } catch (e) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
    throw e;
  }
};
