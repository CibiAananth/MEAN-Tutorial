import config from '../config';
import EmailSequenceJobHandler from '../jobs/emailSequence';

export default ({ agenda }) => {
  agenda.define(
    'send-email',
    { priority: 'high', concurrency: config.agenda.concurrency },
    // @TODO Could this be a static method? Would it be better?
    EmailSequenceJobHandler,
  );

  agenda.start();
};
