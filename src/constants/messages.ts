export const USERS_MESSAGES = {
  NAME_MUST_BE_STRING: 'Name must be a string',
  NAME_IS_REQUIRED: 'Name is required',
  NAME_MUST_BE_BETWEEN_1_AND_100_CHARACTERS: 'Name must be between 1 and 100 characters',
  EMAIL_IS_REQUIRED: 'Email is required',
  EMAIL_MUST_BE_VALID: 'Email must be valid',
  PASSWORD_IS_REQUIRED: 'Password is required',
  PASSWORD_MUST_BE_BETWEEN_6_AND_100_CHARACTERS: 'Password must be between 6 and 100 characters',
  PASSWORD_MUST_BE_1_LOWERCASE_1_NUMBER_1_SYMBOL_1_UPPERCASE_CHARACTERS:
    'Password must contain at least 1 lowercase, 1 number, 1 symbol and 1 uppercase character',
  DATE_OF_BIRTH_IS_REQUIRED: 'Date of birth is required',
  DATE_OF_BIRTH_MUST_BE_ISO8601: 'Date of birth must be in ISO8601 format',
  VALIDATION_ERROR: 'Validation error',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  REGISTER_SUCCESS: 'Register success',
  EMAIL_OR_PASSWORD_INCORRECT: 'Email or password incorrect',
  LOGIN_SUCCESS: 'Login success',
  ACCESS_TOKEN_IS_REQUIRED: 'Access token is required',
  REFRESH_TOKEN_IS_REQUIRED: 'Refresh token is required',
  REFRESH_TOKEN_NOT_FOUND_OR_EXPIRED: 'Refresh token not found or expired',
  EMAIL_VERIFY_TOKEN_IS_REQUIRED: 'Email verify token is required',
  USER_NOT_FOUND: 'User not found',
  EMAIL_ALREADY_VERIFIED: 'Email already verified',
  EMAIL_VERIFY_SUCCESS: 'Email verify success',
  RESEND_VERIFY_EMAIL_SUCCESS: 'Resend verify email success',
  CHECK_EMAIL_TO_RESET_PASSWORD: 'Check email to reset password',
  FORGOT_PASSWORD_TOKEN_IS_REQUIRED: 'Forgot password token is required',
  INVALID_FORGOT_PASSWORD_TOKEN: 'Invalid forgot password token',
  VERIFY_FORGOT_PASSWORD_SUCCESS: 'Verify forgot password success',
  RESET_PASSWORD_SUCCESS: 'Reset password success',
  GET_ME_SUCCESS: 'Get me success',
  USER_NOT_VERIFIED: 'User not verified',
  BIO_MUST_BE_STRING: 'Bio must be a string',
  BIO_MUST_BE_FROM_1_TO_200_CHARACTERS: 'Bio must be from 1 to 200 characters',
  LOCATION_MUST_BE_STRING: 'Location must be a string',
  LOCATION_MUST_BE_FROM_1_TO_200_CHARACTERS: 'Location must be from 1 to 200 characters',
  WEBSITE_MUST_BE_STRING: 'Website must be a string',
  WEBSITE_MUST_BE_FROM_1_TO_200_CHARACTERS: 'Website must be from 1 to 200 characters',
  USERNAME_MUST_BE_STRING: 'Username must be a string',
  USERNAME_MUST_BE_FROM_1_TO_50_CHARACTERS: 'Username must be from 1 to 50 characters',
  IMAGE_MUST_BE_STRING: 'Image must be a string',
  IMAGE_MUST_BE_FROM_1_TO_400_CHARACTERS: 'Image must be from 1 to 400 characters',
  UPDATE_ME_SUCCESS: 'Update me success',
  GET_PROFILE_SUCCESS: 'Get profile success',
  FOLLOW_SUCCESS: 'Follow success',
  FOLLOWED: 'Followed',
  INVALID_USER_ID: 'Invalid user id',
  UNFOLLOW_SUCCESS: 'Unfollow success',
  ALREADY_UNFOLLOWED: 'Already unfollowed',
  USERNAME_INVALID: 'Username must be 4-15 characters long and can only contain letters, numbers, and underscores',
  USERNAME_ALREADY_EXISTS: 'Username already exists',
  OLD_PASSWORD_INCORRECT: 'Old password incorrect',
  CHANGE_PASSWORD_SUCCESS: 'Change password success',
  GMAIL_NOT_VERIFIED: 'Gmail not verified',
  UPLOAD_SUCCESS: 'Upload success',
  REFRESH_TOKEN_SUCCESS: 'Refresh token success',
  GET_VIDEO_STATUS_SUCCESS: 'Get video status success'
} as const

export const TWEET_MESSAGES = {
  INVALID_TYPE: 'Invalid type',
  INVALID_AUDIENCE: 'Invalid audience',
  PARENT_ID_MUST_BE_A_VALID_TWEET_ID: 'Parent id must be a valid tweet id',
  PARENT_ID_MUST_BE_NULL: 'Parent id must be null',
  CONTENT_MUST_NOT_BE_A_NON_EMPTY_STRING: 'Content must not be a non-empty string',
  CONTENT_MUST_BE_EMPTY_STRING: 'Content must be empty string',
  HASHTAG_MUST_BE_AN_ARRAY_OF_STRING: 'Hashtag must be an array of string',
  MENTIONS_MUST_BE_AN_ARRAY_OF_USER_ID: 'Mentions must be an array of user id',
  MEDIAS_MUST_BE_AN_ARRAY_OF_MEDIA_OBJECT: 'Medias must be an array of media object',
  CREATE_TWEET_SUCCESS: 'Create tweet success',
  INVALID_TWEET_ID: 'Invalid tweet id',
  TWEET_NOT_FOUND: 'Tweet not found',
  GET_TWEET_SUCCESS: 'Get tweet success',
  TWEET_IS_NOT_PUBLIC: 'Tweet is not public',
  GET_TWEET_CHILDREN_SUCCESS: 'Get tweet children success',
  GET_NEW_FEEDS_SUCCESS: 'Get new feeds success'
} as const

export const BOOKMARK_MESSAGES = {
  BOOKMARK_SUCCESS: 'Bookmark success',
  UNBOOKMARK_SUCCESS: 'Unbookmark success'
}

export const LIKE_MESSAGES = {
  LIKE_SUCCESS: 'Like success',
  UNLIKE_SUCCESS: 'Unlike success'
}

export const SEARCH_MESSAGES = {
  SEARCH_SUCCESS: 'Search success',
  CONTENT_MUST_BE_STRING: 'Content must be a string',
  INVALID_MEDIA_TYPE: 'Invalid media type',
  PEOPLE_FOLLOW_MUST_BE_0_OR_1: 'People follow must be 0 or 1'
}

export const CONVERSATION_MESSAGES = {
  GET_CONVERSATIONS_SUCCESS: 'Get conversations success'
}
