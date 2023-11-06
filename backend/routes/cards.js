const router = require('express').Router();
const {
  validateCreateCard,
  validateDeleteCard,
  validateLikeCard,
  validateDislikeCard,
} = require('../middlewares/celebrate');
const {
  getCards,
  createCard,
  deleteCardById,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const { validateAuth } = require('../middlewares/validateAuth');

router.get('/api/v1/cards', validateAuth, getCards);

router.post('/api/v1/cards', validateAuth, validateCreateCard, createCard);

router.delete(
  '/api/v1/cards/:id',
  validateAuth,
  validateDeleteCard,
  deleteCardById,
);

router.put(
  '/api/v1/cards/:cardId/likes',
  validateAuth,
  validateLikeCard,
  likeCard,
);

router.delete(
  '/api/v1/cards/:cardId/likes',
  validateAuth,
  validateDislikeCard,
  dislikeCard,
);

module.exports = router;
