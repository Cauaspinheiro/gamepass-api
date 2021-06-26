import GameCollection from 'domain/game_collection'
import GameView, { GameViewDTO } from 'infra/game/game_view'

export interface GameCollectionViewDTO {
  title: string
  id: string
  games: Array<GameViewDTO>
}

export default class GameCollectionView {
  static toJSON(gameCollection: GameCollection): GameCollectionViewDTO {
    return {
      id: gameCollection.id,
      title: gameCollection.title,
      games: gameCollection.games.map((value) => GameView.toJSON(value)),
    }
  }
}
