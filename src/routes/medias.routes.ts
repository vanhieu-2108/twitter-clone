import express from 'express'
import {
  uploadImageController,
  uploadVideoController,
  uploadVideoHLSController,
  videoStatusController
} from '~/controllers/medias.controllers'
import { accessTokenValidation, verifiedUserValidation } from '~/middlewares/users.middlewares'
import { wrapHandler } from '~/utils/wrapHandler'
const mediasRoute = express.Router()

mediasRoute.post('/upload-image', accessTokenValidation, verifiedUserValidation, wrapHandler(uploadImageController))
mediasRoute.post('/upload-video', accessTokenValidation, verifiedUserValidation, wrapHandler(uploadVideoController))
mediasRoute.post(
  '/upload-video-hls',
  accessTokenValidation,
  verifiedUserValidation,
  wrapHandler(uploadVideoHLSController)
)
mediasRoute.get('/video-status/:id', accessTokenValidation, verifiedUserValidation, wrapHandler(videoStatusController))

export default mediasRoute
