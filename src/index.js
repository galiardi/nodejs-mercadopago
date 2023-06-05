import http from 'http';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import paymentRoutes from './routes/payment.routes.js';
import { PORT } from './config.js';

const app = express();
app.use(morgan('dev'));
app.use(paymentRoutes);
app.use(express.static(path.resolve('src/public')));

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
