import mercadopago from 'mercadopago';
import { HOST, MERCADOPAGO_API_KEY } from '../config.js';

export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: MERCADOPAGO_API_KEY,
  });

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: 'kimono talla M',
        quantity: 1,
        unit_price: 10000,
        currency_id: 'CLP',
      },
    ],
    back_urls: {
      success: `${HOST}/success`,
      pending: `${HOST}/pending`,
      failure: `${HOST}/failure`,
    },
    notification_url: 'https://fc33-186-21-198-234.ngrok-free.app/webhook',
  });

  console.log(result);
  res.send(result.body);
};

export const receiveWebhook = async (req, res) => {
  const payment = req.query;

  try {
    if (payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id']);
      console.log(data);
      // store in database
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: error.message });
  }

  res.send('webhook');
};
