import { Router } from 'express';
import { create, all } from 'mathjs';

const mathjsRouter = Router();
const math = create(all, {});

mathjsRouter.get('/', (request, response) => {
  const { expr } = request.query;

  if (expr === undefined) {
    return response
      .status(400)
      .json({ error: 'Required query parameter "expr" missing in url.' });
  }

  const result = math.evaluate(expr as string);

  return response.json({ result });
});

export default mathjsRouter;
