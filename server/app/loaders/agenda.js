import Agenda from 'agenda';
import config from '../config';

export default () => {
  return new Agenda({
    db: { address: config.databaseURL, collection: config.agenda.dbCollection },
    processEvery: config.agenda.pooltime,
    maxConcurrency: config.agenda.concurrency,
  });
};
