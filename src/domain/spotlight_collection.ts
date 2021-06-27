import GameCollection from './game_collection'
import Spotlight from './spotlight'

export default class SpotlightCollection extends GameCollection {
  games: Array<Spotlight>

  constructor(props: SpotlightCollection) {
    super(props)

    this.games = props.games
  }
}
