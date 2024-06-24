import { ObjectId } from 'mongodb'

interface RefreshTokenType {
  _id?: ObjectId
  user_id: ObjectId
  token: string
  created_at?: Date
  iat: number
  exp: number
}

export default class RefreshToken {
  _id?: ObjectId
  user_id: ObjectId
  token: string
  created_at?: Date
  iat: Date
  exp: Date
  constructor(refreshToken: RefreshTokenType) {
    const date = new Date()
    this._id = refreshToken._id
    this.user_id = refreshToken.user_id
    this.token = refreshToken.token
    this.created_at = this.created_at || date
    this.iat = new Date(refreshToken.iat * 1000) // Convert Epoch time to Date
    this.exp = new Date(refreshToken.exp * 1000) // Convert Epoch time to Date
  }
}
