import * as Yup from 'yup';
import Recipients from '../models/Recipients';

class RecipientsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().notRequired(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    } = await Recipients.create(req.body);

    return res.json({ id, name, street, number, complement, state, city, cep });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().notRequired(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const { id } = req.params;

    const recipients = await Recipients.findByPk(id);

    if (!recipients) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    const {
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    } = await recipients.update(req.body);

    return res.json({
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });
  }
}

export default new RecipientsController();
