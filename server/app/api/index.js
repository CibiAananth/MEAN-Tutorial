import { Router } from 'express';

// routes
import user from './routes/user';
import auth from './routes/auth';
import agendash from './routes/agendash';

export default () => {
  const app = Router();
  user(app);
  auth(app);
  agendash(app);
  return app;
};
