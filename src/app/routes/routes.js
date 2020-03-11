import { Router } from 'express';
import routes from './index';
import authMiddleware from '../middlewares/auth';

import session from './session';
const router = new Router();

session(router);
router.use(authMiddleware);

(function initRoutes() {
  return routes.forEach(route => route(router));
})();

export default router;
