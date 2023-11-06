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

router.get('/api/v1/users', validateAuth, getUsers);

router.get('/api/v1/users/me', validateAuth, getUserInfo);

router.get('/api/v1/users/:id', validateAuth, validateUserInfo, getUserInfo);

router.post('/api/v1/signup', validateCreateUser, createUser);

router.post('/api/v1/signin', validateLogin, login);

router.get('/api/v1/signout', validateAuth, exit);

router.get('/api/v1/crash-test', () => {
  setTimeout(() => {
    throw new Error('The server is about to crash');
  }, 0);
});

router.patch(
  '/api/v1/users/me',
  validateAuth,
  validatePatchUserProfile,
  patchUserProfile,
);

router.patch(
  '/api/v1/users/me/avatar',
  validateAuth,
  validatePatchUserAvatar,
  patchUserAvatar,
);

module.exports = router;
