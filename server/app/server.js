import express from 'express';

import loaders from './loaders';

// local dependencies
import config from './config';

const createServer = async () => {
  const app = express();

  await loaders({ expressApp: app });

  app.listen(config.port, err => {
    if (err) {
      console.error('App crashed', process.exit(1));
      return;
    }
    console.log('Server listening on', config.port);
  });
};

createServer();
