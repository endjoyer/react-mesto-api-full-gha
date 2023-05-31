const cors = require('cors');

module.exports = () => {
  cors({
    origin: [
      'http://localhost:3001',
      'http://endjoys.project.nomoredomains.rocks',
      'https://endjoys.project.nomoredomains.rocks',
    ],
    credentials: true,
    maxAge: 60,
  });
};
