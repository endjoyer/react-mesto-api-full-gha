const express = require('express');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
// const { corsAccess } = require('./middlewares/corsAccess');
const limiterSettings = require('./utils/limiterSettings');
const routesUsers = require('./routes/users');
const routesCards = require('./routes/cards');
const { NotFoundError } = require('./errors/index');
const errorMiddleware = require('./middlewares/errorMiddleware');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000, ADDRESS_DB = 'mongodb://127.0.0.1:27017/mestodb' } =
  process.env;
const app = express();

const limiter = rateLimit(limiterSettings);
// app.use(corsAccess);
app.options('*', cors());
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://localhost:3000',
      'http://endjoys.project.nomoredomains.rocks',
      'https://endjoys.project.nomoredomains.rocks',
    ],
    credentials: true,
    maxAge: 30,
  }),
);

app.use(limiter);
app.use(helmet());

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(ADDRESS_DB)
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.error('Database connection error:', err.message);
  });

app.use(requestLogger);

app.use((req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  if (
    [
      'http://localhost:3000',
      'https://localhost:3000',
      'http://endjoys.project.nomoredomains.rocks',
      'https://endjoys.project.nomoredomains.rocks',
    ].includes(origin)
  ) {
    res.header('Access-Control-Allow-Origin', origin);
    if (method === 'OPTIONS') {
      res.header(
        'Access-Control-Allow-Methods',
        'GET,HEAD,PUT,PATCH,POST,DELETE',
      );
      const requestHeaders = req.headers['access-control-request-headers'];
      res.header('Access-Control-Allow-Headers', requestHeaders);
      return res.end();
    }
  }

  return next();
});

app.use(routesUsers);
app.use(routesCards);

app.use(errorLogger);

app.use((req, res, next) => next(new NotFoundError('This page not found')));
app.use(errors());
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
