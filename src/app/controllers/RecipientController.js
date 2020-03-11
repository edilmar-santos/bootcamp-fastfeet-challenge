import Recipient from '../models/Recipient';

class RecipientCntroller {
  async getAll(req, res) {
    const recipients = await Recipient.findAll();

    return res.json(recipients);
  }

  async getById(req, res) {}

  async save(req, res) {
    const {
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code,
    } = await Recipient.create(req.body);

    return res.json({
      name,
      street,
      number,
      complement: complement || '',
      state,
      city,
      zip_code,
    });
  }

  async update(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    const {
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code,
    } = await recipient.update(req.body);

    return res.json({
      name,
      street,
      number,
      complement: complement || '',
      state,
      city,
      zip_code,
    });
  }
}

export default new RecipientCntroller();
