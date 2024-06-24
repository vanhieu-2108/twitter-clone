import bookmarksRoute from './routes/bookmarks.routes'
import conversationsRoute from './routes/conversations.routes'
import cors, { CorsOptions } from 'cors'
import databaseService from './services/databases.services'
import express from 'express'
import fs from 'fs'
import helmet from 'helmet'
import initSocket from './utils/socket'
import likesRoute from './routes/likes.routes'
import mediasRoute from './routes/medias.routes'
import path from 'path'
import searchRoute from './routes/search.routes'
import staticRoute from './routes/static.routes'
import swaggerUi from 'swagger-ui-express'
import tweetsRoute from './routes/tweets.routes'
import usersRoute from './routes/users.routes'
import YAML from 'yaml'
import { createServer } from 'http'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import { initFolder } from './utils/file'
import { rateLimit } from 'express-rate-limit'
import { UPLOAD_VIDEO_DIR } from './constants/dir'
import { envConfig, isProduction } from '~/utils/config'
const app = express()
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false // Disable the `X-RateLimit-*` headers.
})
app.use(helmet())
app.use(limiter)
const file = fs.readFileSync(path.resolve('twitter-swagger.yaml'), 'utf8')
const swaggerDocument = YAML.parse(file)
const httpServer = createServer(app)
const corsOpions: CorsOptions = {
  origin: isProduction ? (envConfig.clientUrl as string) : '*'
}
app.use(cors(corsOpions))
const port = envConfig.port || 4000
// Tạo folder uploads để lưu trữ file upload
initFolder()
app.use(express.json())

app.use('/hello-world', (req, res) => {
  res.send('Hello World')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
databaseService
  .connect()
  .then(() => {
    databaseService.indexUsers()
    databaseService.indexRefreshTokens()
    databaseService.indexVideoStatus()
    databaseService.indexFollowers()
    databaseService.indexTweets()
  })
  .catch(console.log)
app.use('/users', usersRoute)
app.use('/medias', mediasRoute)
app.use('/tweets', tweetsRoute)
app.use('/bookmarks', bookmarksRoute)
app.use('/likes', likesRoute)
app.use('/search', searchRoute)
app.use('/conversations', conversationsRoute)
app.use('/static', staticRoute)
app.use('/static/video', express.static(UPLOAD_VIDEO_DIR))
app.use(defaultErrorHandler)
initSocket(httpServer)
httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
