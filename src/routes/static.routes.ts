import { Router } from 'express'
import {
  serveImageController,
  serveM3u8Controller,
  serveVideoStreamController,
  serveSegmentController
} from '~/controllers/medias.controllers'
const staticRoute = Router()

staticRoute.get('/image/:name', serveImageController)
staticRoute.get('/video-stream/:name', serveVideoStreamController)
staticRoute.get('/video-hls/:id/master.m3u8', serveM3u8Controller)
staticRoute.get('/video-hls/:id/:v/:segment', serveSegmentController)
export default staticRoute
