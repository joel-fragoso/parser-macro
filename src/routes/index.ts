import { Router } from 'express';

import mathjsRouter from './mathjs.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ math_js: 'http://localhost:3333/mathjs' });
});

routes.use('/mathjs', mathjsRouter);

export default routes;
