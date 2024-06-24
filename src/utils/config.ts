import { config } from 'dotenv'
import fs from 'fs'
import path from 'path'
const env = process.env.NODE_ENV
const envFilename = `.env.${env}`
if (!env) {
  console.log('Bạn chưa cung cấp biến môi trường NODE_ENV (development, production, staging)')
  console.log(`Phát hiện NODE_ENV = ${env}`)
  process.exit(1)
}
console.log(`Phát hiện NODE_ENV = ${env}, vì thế app sẽ dùng file môi trường là ${envFilename}`)

if (!fs.existsSync(path.resolve(envFilename))) {
  console.log('Không tìm thấy file môi trường')
  console.log(`Lưu ý: App không dùng file .env, ví dụ môi trường là development thì app sẽ dùng file .env.development`)
  console.log(`Vui lòng tạo file ${envFilename} và tham khảo nội dung ở file .env.example`)
  process.exit(1)
}
config({
  path: envFilename
})
export const isProduction = env === 'production'
export const envConfig = {
  port: process.env.PORT || 4000,
  host: process.env.HOST,
  dbName: process.env.DB_NAME,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbTweetsCollection: process.env.DB_COLLECTION_TWEETS,
  dbUsersCollection: process.env.DB_COLLECTION_USERS,
  dbHashtagsCollection: process.env.DB_COLLECTION_HASHTAGS,
  dbBookmarksCollection: process.env.DB_COLLECTION_BOOKMARKS,
  dbLikesCollection: process.env.DB_COLLECTION_LIKES,
  dbRefreshTokensCollection: process.env.DB_COLLECTION_REFRESH_TOKENS,
  dbFollowersCollection: process.env.DB_COLLECTION_FOLLOWERS,
  dbVideoStatusCollection: process.env.DB_COLLECTION_VIDEO_STATUS,
  dbConversationCollection: process.env.DB_COLLECTION_CONVERSATIONS,
  passwordSecret: process.env.PASSWORD_SECRET, // Đây không có trong tệp môi trường, cần thêm vào hoặc xóa đi nếu không dùng
  jwtSecretAccessToken: process.env.ACCESS_TOKEN_SECRET,
  jwtSecretRefreshToken: process.env.REFRESH_TOKEN_SECRET,
  jwtSecretEmailVerifyToken: process.env.EMAIL_VERIFY_TOKEN_SECRET,
  jwtSecretForgotPasswordToken: process.env.FORGOT_PASSWORD_TOKEN_SECRET,
  refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
  accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
  emailVerifyTokenExpiresIn: process.env.EMAIL_VERIFY_TOKEN_EXPIRES_IN,
  forgotPasswordTokenExpiresIn: process.env.FORGOT_PASSWORD_TOKEN_EXPIRES_IN,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleRedirectUri: process.env.GOOGLE_REDIRECT_URI,
  clientRedirectCallback: process.env.CLIENT_REDIRECT_CALLBACK,
  clientUrl: process.env.CLIENT_URL,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsRegion: process.env.AWS_REGION,
  sesFromAddress: process.env.SES_FROM_ADDRESS,
  s3BucketName: process.env.S3_BUCKET_NAME
}
