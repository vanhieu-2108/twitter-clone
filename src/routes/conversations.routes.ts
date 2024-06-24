import { Router } from 'express'
import { getConversationsController } from '~/controllers/conversations.controllers'
import { paginationValidation } from '~/middlewares/tweets.middlewares'

import {
  accessTokenValidation,
  getConversationValidation,
  verifiedUserValidation
} from '~/middlewares/users.middlewares'
import { wrapHandler } from '~/utils/wrapHandler'

const conversationsRoute = Router()

conversationsRoute.get(
  '/receivers/:receiver_id',
  accessTokenValidation,
  verifiedUserValidation,
  paginationValidation,
  getConversationValidation,
  wrapHandler(getConversationsController)
)

export default conversationsRoute
