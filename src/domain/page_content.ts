import Game from 'domain/game'
import GamesList from 'domain/games_list'

export default class PageContent {
  id: string
  title: string
  spotlight: Game
  gamesLists: GamesList[]

  constructor(props: PageContent) {
    this.id = props.id
    this.title = props.title
    this.spotlight = props.spotlight
    this.gamesLists = props.gamesLists
  }
}
