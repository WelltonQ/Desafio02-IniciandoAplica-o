import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientsController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // todas as rotas declaradas abaixo, deverão conter o token.

routes.post('/recipients', RecipientsController.store);
routes.put('/recipients/:id', RecipientsController.update);

export default routes;
