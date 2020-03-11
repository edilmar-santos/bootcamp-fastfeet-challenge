import RecipientController from '../controllers/RecipientController';

export default route => {
  route.get('/recipients', RecipientController.getAll);
  route.post('/recipients', RecipientController.save);
  route.put('/recipients/:id', RecipientController.update);
};
