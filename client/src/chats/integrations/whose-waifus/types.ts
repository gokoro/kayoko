export type VXTwitterAPIResponse = {
  allSameType: boolean
  article: any
  combinedMediaUrl: any
  communityNote: any
  conversationID: string
  date: string
  date_epoch: number
  fetched_on: number
  hasMedia: boolean
  hashtags: Array<any>
  lang: string
  likes: number
  media_extended: Array<{
    altText: any
    size: {
      height: number
      width: number
    }
    thumbnail_url: string
    type: string
    url: string
  }>
  mediaURLs: Array<string>
  pollData: any
  possibly_sensitive: boolean
  qrt: any
  qrtURL: any
  replies: number
  replyingTo: any
  replyingToID: any
  retweet: any
  retweetURL: any
  retweets: number
  text: string
  tweetID: string
  tweetURL: string
  user_name: string
  user_profile_image_url: string
  user_screen_name: string
}
