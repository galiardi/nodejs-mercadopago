import http from 'http';
import express from 'express';
import morgan from 'morgan';
import paymentRoutes from './routes/payments.routes.js';
import { PORT } from './config.js';

const app = express();
app.use(morgan('dev'));
app.use(paymentRoutes);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
