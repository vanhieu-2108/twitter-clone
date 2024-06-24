import express from 'express'
import {
  createTweetController,
  getNewFeedsController,
  getTweetChildrenController,
  getTweetController
} from '~/controllers/tweets.controllers'
import {
  audienceValidation,
  createTweetValidation,
  getTweetChildrenValidation,
  paginationValidation,
  tweetIdValidation
} from '~/middlewares/tweets.middlewares'
import {
  accessTokenValidation,
  isUserLoggedInValidation,
  verifiedUserValidation
} from '~/middlewares/users.middlewares'
import { wrapHandler } from '~/utils/wrapHandler'

const tweetsRoute = express.Router()

/**
 * Description: Create a new tweet
 * Path: /
 * Method: POST
 * Body: TweetRequestBody
 */

tweetsRoute.post(
  '/',
  accessTokenValidation,
  verifiedUserValidation,
  createTweetValidation,
  wrapHandler(createTweetController)
)

/**
 * Description: Get tweet detail
 * Path: /:tweet_id
 * Method: GET
 * Header: {Authorization?: Bearer <access_token>}
 */

tweetsRoute.get(
  '/:tweet_id',
  tweetIdValidation,
  isUserLoggedInValidation(accessTokenValidation),
  isUserLoggedInValidation(verifiedUserValidation),
  audienceValidation,
  wrapHandler(getTweetController)
)

/**
 * Description: Get Tweet Children
 * Path: /:tweet_id/children
 * Method: GET
 * Header: {Authorization?: Bearer <access_token>}
 * Query: {limit: number, page: number, tweet_type: TweetType}
 */

tweetsRoute.get(
  '/:tweet_id/children',
  tweetIdValidation,
  paginationValidation,
  getTweetChildrenValidation,
  isUserLoggedInValidation(accessTokenValidation),
  isUserLoggedInValidation(verifiedUserValidation),
  audienceValidation,
  wrapHandler(getTweetChildrenController)
)

/**
 * Description: Get New Feeds
 * Path: /new-feeds
 * Method: GET
 * Header: {Authorization?: Bearer <access_token>}
 * Query: {limit: number, page: number}
 */

tweetsRoute.get(
  '/',
  paginationValidation,
  accessTokenValidation,
  verifiedUserValidation,
  wrapHandler(getNewFeedsController)
)
export default tweetsRoute
