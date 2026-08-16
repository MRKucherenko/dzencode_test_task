require('dotenv').config({ quiet: true });
const express = require('express');
const cors = require('cors');
const db = require('./src/models');
const errorHandler = require('./src/middlewares/errorHandler');
const notFound = require('./src/middlewares/notFound');
const ordersRoutes = require('./src/routes/orders.routes');
const productsRoutes = require('./src/routes/products.routes');
const { Server } = require('socket.io');
const http = require('http');
const sessionCounter = require('./src/sockets/sessionCounter');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/orders', ordersRoutes);
app.use('/api/products', productsRoutes)

app.use(notFound);
app.use(errorHandler);

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
sessionCounter(io);

const PORT = process.env.PORT || 4000;

db.sequelize.authenticate()
  .then(() => {
    console.log('MySQL connected');
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('DB connection error:', err.message);
  }
);
