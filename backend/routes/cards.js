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

router.get('/cards', getCards);

router.post('/cards', validateCreateCard, createCard);

router.delete('/cards/:id', validateDeleteCard, deleteCardById);

router.put('/cards/:cardId/likes', validateLikeCard, likeCard);

router.delete(
  '/cards/:cardId/likes',

  validateDislikeCard,
  dislikeCard,
);

module.exports = router;
