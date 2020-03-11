import SessionController from '../controllers/SessionController';

export default route => {
  route.post('/session', SessionController.create);
};
