const { Router } = require('express');

const authRouter = Router();
const AuthController = require('../controllers/auth.controller');
const authController = new AuthController();

authRouter.post('/register', authController.registerAccount);
authRouter.get('/token', authController.publichAccessToken);

module.exports = authRouter;