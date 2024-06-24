import { Router } from 'express'
import { bookmarkTweetController, unbookmarkTweetController } from '~/controllers/bookmarks.controllers'
import { tweetIdValidation } from '~/middlewares/tweets.middlewares'
import { accessTokenValidation, verifiedUserValidation } from '~/middlewares/users.middlewares'
import { wrapHandler } from '~/utils/wrapHandler'

const bookmarksRoute = Router()

/**
 * Description: Bookmark a tweet
 * Path: /
 * Method: POST
 * Body: {tweet_id: string}
 * Header: {Authorization: Bearer <access_token>}
 */
bookmarksRoute.post(
  '',
  accessTokenValidation,
  verifiedUserValidation,
  tweetIdValidation,
  wrapHandler(bookmarkTweetController)
)
/**
 * Description: Unbookmark a tweet
 * Path: /tweets/:tweet_id
 * Method: DELETE
 * Params: {tweet_id: string}
 * Header: {Authorization: Bearer <access_token>}
 */
bookmarksRoute.delete(
  '/tweets/:tweet_id',
  accessTokenValidation,
  verifiedUserValidation,
  tweetIdValidation,
  wrapHandler(unbookmarkTweetController)
)

export default bookmarksRoute
