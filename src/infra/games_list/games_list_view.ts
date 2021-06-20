import GamesList from 'domain/games_list'
import GameView, { GameViewDTO } from 'infra/game/game_view'

export interface GamesListViewDTO {
  title: string
  id: string
  games: Array<GameViewDTO>
}

export default class GamesListView {
  static toJSON(gamesList: GamesList): GamesListViewDTO {
    return {
      id: gamesList.id,
      title: gamesList.title,
      games: gamesList.games.map((value) => GameView.toJSON(value)),
    }
  }
}
