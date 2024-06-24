export enum UserVerifyStatus {
  Unverified, // chưa xác thực email, mặc định = 0
  Verified, // đã xác thực email
  Banned // bị khóa
}

export enum TokenType {
  AccessToken,
  RefreshToken,
  ForgotPasswordToken,
  VerifyEmailToken
}

export enum MediaType {
  Image,
  Video,
  HLS
}

export enum MediaTypeQuery {
  IMAGE = 'image',
  VIDEO = 'video'
}

export enum EncodingStatus {
  Pending, // chờ xử lý
  Processing, // đang xử lý
  Success, // xử lý thành công
  Failed // xử lý thất bại
}

export enum TweetType {
  Tweet,
  Retweet,
  Comment,
  QuoteTweet
}

export enum TweetAudience {
  Everyone,
  TwitterCircle
}

export enum PeopleFollow {
  Anyone = '0',
  Following = '1'
}
