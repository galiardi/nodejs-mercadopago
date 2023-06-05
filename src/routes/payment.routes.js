import { Router } from 'express';
import {
  createOrder,
  receiveWebhook,
} from '../contollers/payment.controller.js';

const router = Router();

router.post('/create-order', createOrder);

router.get('/success', (req, res) => {
  res.send('success');
});

router.get('/pending', (req, res) => {
  res.send('pending');
});

router.get('/failure', (req, res) => {
  res.send('failure');
});

router.post('/webhook', receiveWebhook);

export default router;
