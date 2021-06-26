import Rating from 'domain/rating'

export default class Game {
  id: string
  title: string
  logo: string
  trailer: string
  description: string
  rating: Rating
  ratingReasons: Array<string>
  size: string
  publisher: string
  spotlightSlug: string
  createdAt: number

  constructor(props: Game) {
    this.id = props.id
    this.title = props.title
    this.logo = props.logo
    this.trailer = props.trailer
    this.description = props.description
    this.rating = props.rating
    this.ratingReasons = props.ratingReasons
    this.size = props.size
    this.publisher = props.publisher
    this.spotlightSlug = props.spotlightSlug
    this.createdAt = props.createdAt
  }
}
