const router = require('express').Router();
const {
  login,
  exit,
  getUsers,
  createUser,
  getUserInfo,
  patchUserProfile,
  patchUserAvatar,
} = require('../controllers/users');
const {
  validateCreateUser,
  validateUserInfo,
  validatePatchUserProfile,
  validatePatchUserAvatar,
  validateLogin,
} = require('../middlewares/celebrate');
const { validateAuth } = require('../middlewares/validateAuth');

router.get('/users', getUsers);

router.get('/users/me', getUserInfo);

router.get('/users/:id', validateUserInfo, getUserInfo);

router.post('/signup', validateCreateUser, createUser);

router.post('/signin', validateLogin, login);

router.get('/signout', exit);

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('The server is about to crash');
  }, 0);
});

router.patch(
  '/users/me',
  validateAuth,
  validatePatchUserProfile,
  patchUserProfile,
);

router.patch(
  '/users/me/avatar',
  validateAuth,
  validatePatchUserAvatar,
  patchUserAvatar,
);

module.exports = router;
