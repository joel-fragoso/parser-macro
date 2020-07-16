import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ math_js: 'http://localhost:3333/mathjs' });
});

export default routes;
