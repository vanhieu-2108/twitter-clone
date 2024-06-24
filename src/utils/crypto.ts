import crypto from 'crypto'

const sha256 = (content: string) => {
  return crypto.createHash('sha256').update(content).digest('hex')
}

export const hashPassword = (password: string) => {
  return sha256(password)
}
