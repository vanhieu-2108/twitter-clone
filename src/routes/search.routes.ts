import { Router } from 'express'
import { searchController } from '~/controllers/search.controllers'
import { searchValidation } from '~/middlewares/search.middleware'
import { paginationValidation } from '~/middlewares/tweets.middlewares'
import { accessTokenValidation, verifiedUserValidation } from '~/middlewares/users.middlewares'
const searchRoute = Router()

searchRoute.get(
  '/',
  accessTokenValidation,
  verifiedUserValidation,
  searchValidation,
  paginationValidation,
  searchController
)

export default searchRoute
