import expressLoader from './express';
import mongoDBLoader from './mongoDB';
import Logger from './logger';
import dependencyInjectorLoader from './dependencyInjector';
import jobsLoader from './jobs';
import UserSubscriber from './events';

import userModel from '../models/user';

export default async ({ expressApp }) => {
  const mongoConnection = await mongoDBLoader();
  Logger.info('🌿 MongoDB loaded');

  // It returns the agenda instance because it's needed in the subsequent loaders
  const { agenda } = await dependencyInjectorLoader({
    mongoConnection,
    models: [
      {
        name: 'userModel',
        model: userModel,
      },
    ],
  });
  Logger.info('🎯 Dependency Injector loaded');

  await new UserSubscriber();
  Logger.info('💻 Events loaded');

  await jobsLoader({ agenda });
  Logger.info('💻 Jobs loaded');

  await expressLoader({ app: expressApp });
  Logger.info('🚆 Express loaded');
};
