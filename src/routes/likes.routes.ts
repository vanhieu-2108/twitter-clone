import { Router } from 'express'
import { likeTweetController, unlikeTweetController } from '~/controllers/likes.controllers'
import { tweetIdValidation } from '~/middlewares/tweets.middlewares'
import { accessTokenValidation, verifiedUserValidation } from '~/middlewares/users.middlewares'
import { wrapHandler } from '~/utils/wrapHandler'

const likesRoute = Router()

/**
 * Description: Like a tweet
 * Path: /
 * Method: POST
 * Body: {tweet_id: string}
 * Header: {Authorization: Bearer <access_token>}
 */

likesRoute.post('', accessTokenValidation, verifiedUserValidation, tweetIdValidation, wrapHandler(likeTweetController))

/**
 * Description: Unlike a tweet
 * Path: /tweets/:tweet_id
 * Method: DELETE
 * Params: {tweet_id: string}
 * Header: {Authorization: Bearer <access_token>}
 */
likesRoute.delete(
  '/tweets/:tweet_id',
  accessTokenValidation,
  verifiedUserValidation,
  tweetIdValidation,
  wrapHandler(unlikeTweetController)
)

export default likesRoute
