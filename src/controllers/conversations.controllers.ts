import { Request, Response } from 'express'
import { CONVERSATION_MESSAGES } from '~/constants/messages'
import { ConversationParams } from '~/models/requests/Conversation.requests'
import { TokenPayload } from '~/models/requests/User.requests'
import conversationService from '~/services/conversations.services'
export const getConversationsController = async (req: Request<ConversationParams>, res: Response) => {
  const { user_id: sender_id } = req.decoded_authorization as TokenPayload
  const { receiver_id } = req.params
  const limit = Number(req.query.limit)
  const page = Number(req.query.page)
  const result = await conversationService.getConversationsById({
    sender_id,
    receiver_id,
    limit,
    page
  })
  return res.json({
    message: CONVERSATION_MESSAGES.GET_CONVERSATIONS_SUCCESS,
    result: {
      limit,
      page,
      total_page: Math.ceil(result.total / limit),
      conversations: result.conversations
    }
  })
}
