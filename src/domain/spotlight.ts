import Game from './game'

export default class Spotlight extends Game {
  spotlightTitle: string
  spotlightCover: string
  spotlightDescription: string

  constructor(props: Spotlight) {
    super(props)

    this.spotlightTitle = props.spotlightTitle
    this.spotlightCover = props.spotlightCover
    this.spotlightDescription = props.spotlightDescription
  }
}
