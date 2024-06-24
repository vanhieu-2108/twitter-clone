import express from 'express'
import {
  changePasswordController,
  followController,
  forgotPasswordController,
  getMeController,
  getProfileController,
  loginController,
  logoutController,
  oauthController,
  refreshTokenController,
  registerController,
  resendVerifyEmailController,
  resetPasswordController,
  unfollowController,
  updateMeController,
  verifyEmailController,
  verifyForgotPasswordController
} from '~/controllers/users.controllers'
import { filterMiddleware } from '~/middlewares/common.middlewares'
import {
  accessTokenValidation,
  changePasswordValidation,
  emailVerifyTokenValidation,
  followValidation,
  forgotPasswrodValidation,
  loginValidation,
  refreshTokenValidation,
  registerValidation,
  resetPasswordValidation,
  unfollowValidation,
  updateMeValidation,
  verifiedUserValidation,
  verifyForgotPasswordValidation
} from '~/middlewares/users.middlewares'
import { UpdateMeReqBody } from '~/models/requests/User.requests'
import { wrapHandler } from '~/utils/wrapHandler'
const usersRoute = express.Router()

usersRoute.post('/register', registerValidation, wrapHandler(registerController))
/**
 * @openapi
 * /users/login:
 *  post:
 *   description: Login
 *   tags:
 *   - Users
 *   requestBody:
 *     description: Thông tin đăng nhập
 */
usersRoute.post('/login', loginValidation, wrapHandler(loginController))
usersRoute.get('/oauth/google', wrapHandler(oauthController))
usersRoute.post('/logout', accessTokenValidation, refreshTokenValidation, wrapHandler(logoutController))
usersRoute.post('/refresh-token', refreshTokenValidation, wrapHandler(refreshTokenController))
usersRoute.post('/verify-email', emailVerifyTokenValidation, wrapHandler(verifyEmailController))
usersRoute.post('/resend-verify-email', accessTokenValidation, wrapHandler(resendVerifyEmailController))
usersRoute.post('/forgot-password', forgotPasswrodValidation, wrapHandler(forgotPasswordController))
usersRoute.post('/verify-forgot-password', verifyForgotPasswordValidation, wrapHandler(verifyForgotPasswordController))
usersRoute.post('/reset-password', resetPasswordValidation, wrapHandler(resetPasswordController))
usersRoute.get('/me', accessTokenValidation, wrapHandler(getMeController))
usersRoute.patch(
  '/me',
  accessTokenValidation,
  verifiedUserValidation,
  filterMiddleware<UpdateMeReqBody>([
    'name',
    'date_of_birth',
    'bio',
    'location',
    'website',
    'username',
    'avatar',
    'cover_photo'
  ]),
  updateMeValidation,
  wrapHandler(updateMeController)
)
usersRoute.get('/:username', wrapHandler(getProfileController))
usersRoute.post(
  '/follow',
  accessTokenValidation,
  verifiedUserValidation,
  followValidation,
  wrapHandler(followController)
)
usersRoute.delete(
  '/follow/:user_id',
  accessTokenValidation,
  verifiedUserValidation,
  unfollowValidation,
  wrapHandler(unfollowController)
)

usersRoute.put(
  '/change-password',
  accessTokenValidation,
  verifiedUserValidation,
  changePasswordValidation,
  wrapHandler(changePasswordController)
)
export default usersRoute
