require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const limiterSettings = require('./utils/limiterSettings');
const routesUsers = require('./routes/users');
const routesCards = require('./routes/cards');
const { NotFoundError } = require('./errors/index');
const errorMiddleware = require('./middlewares/errorMiddleware');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/mestodb' } =
  process.env;
const app = express();
const limiter = rateLimit(limiterSettings);

app.use(
  cors({
    origin: [
      'http://localhost:3001',
      'http://endjoys.project.nomoredomains.rocks',
      'https://endjoys.project.nomoredomains.rocks',
    ],
    credentials: true,
    maxAge: 60,
  }),
);

app.use(helmet());

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(DB_URL);

app.use(requestLogger);

app.use(limiter);

app.use(routesUsers);
app.use(routesCards);

app.use(errorLogger);

app.use((req, res, next) => next(new NotFoundError('This page not found')));
app.use(errors());
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
