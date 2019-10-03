import { Container } from 'typedi';
import events from './events';

const onUserSignIn = async ({ _id }) => {
  const Logger = Container.get('logger');
  try {
    const UserModel = Container.get('userModel');
    await UserModel.updateOne({ _id }, { $set: { lastLogin: new Date() } });
    Logger.info('👨‍💻 updated user lastLogin');
  } catch (e) {
    Logger.error(`🔥 Error on event ${events.user.signIn}: %o`, e);

    // Throw the error so the process die (check src/app.ts)
    throw e;
  }
};

export default class UserSubscriber {
  constructor() {
    this.eventSubscriber = Container.get('eventEmitter');
    this.eventSubscriber.on(events.user.signIn, onUserSignIn);
  }
}
