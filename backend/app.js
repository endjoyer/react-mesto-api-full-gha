const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
// const { corsAccess } = require('./middlewares/corsAccess');
const limiterSettings = require('./utils/limiterSettings');
const routesUsers = require('./routes/users');
const routesCards = require('./routes/cards');
const { NotFoundError } = require('./errors/index');
const errorMiddleware = require('./middlewares/errorMiddleware');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://localhost:3000',
      'http://localhost:3001',
      'https://localhost:3001',
      'http://endjoys.project.nomoredomains.rocks',
      'https://endjoys.project.nomoredomains.rocks',
    ],
    credentials: true,
    maxAge: 30,
  }),
);

const limiter = rateLimit(limiterSettings);
// app.use(corsAccess);

app.use(limiter);
app.use(helmet());

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(requestLogger);

// app.use((req, res, next) => {
//   const { origin } = req.headers;
//   const { method } = req;
//   if (
//     [
//       'http://localhost:3000',
//       'https://localhost:3000',
//       'http://endjoys.project.nomoredomains.rocks',
//       'https://endjoys.project.nomoredomains.rocks',
//     ].includes(origin)
//   ) {
//     res.header('Access-Control-Allow-Origin', origin);
//     if (method === 'OPTIONS') {
//       res.header(
//         'Access-Control-Allow-Methods',
//         'GET,HEAD,PUT,PATCH,POST,DELETE',
//       );
//       const requestHeaders = req.headers['access-control-request-headers'];
//       res.header('Access-Control-Allow-Headers', requestHeaders);
//       return res.end();
//     }
//   }

//   return next();
// });

app.use(routesUsers);
app.use(routesCards);

app.use(errorLogger);

app.use((req, res, next) => next(new NotFoundError('This page not found')));
app.use(errors());
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
