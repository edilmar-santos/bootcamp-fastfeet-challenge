import DeliveryMan from '../models/DeliveryMan';

class DeliveryManService {
  async listUser() {
    return await DeliveryMan.findAll();
  }
}

export default DeliveryManService;
