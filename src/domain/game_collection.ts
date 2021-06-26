import Game from 'domain/game'

export default class GameCollection {
  title: string
  id: string
  games: Array<Game>

  constructor(props: GameCollection) {
    this.games = props.games.map((value) => new Game(value))
    this.title = props.title
    this.id = props.id
  }
}
