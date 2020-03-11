import DeliveryManController from '../controllers/DeliveryManController';
// import DeliveryService from '../services/DeliveryManService';
// import DeliveryMan from '../models/DeliveryMan';

// const deliveryManService = new DeliveryService(DeliveryMan);
// const DeliveryManController = new DeliveryManController(deliveryManService);

export default route => {
  route.get('/deliverymans', DeliveryManController.getAll);
  route.get('/deliverymans/:id', DeliveryManController.getById);
  route.post('/deliverymans/:id', DeliveryManController.create);
  route.put('/deliverymans/:id', DeliveryManController.update);
  route.delete('/deliverymans/:id', DeliveryManController.remove);
};
