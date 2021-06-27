import Game from './game'
import GameCollection from './game_collection'
import SpotlightCollection from './spotlight_collection'

export default class HomePageContent {
  spotlights: SpotlightCollection
  collections: Array<GameCollection>
  games: Array<Game>

  constructor(props: HomePageContent) {
    this.spotlights = props.spotlights
    this.collections = props.collections
    this.games = props.games
  }
}
