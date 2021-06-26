import GameCollection from 'domain/game_collection'
import GameModel from 'infra/game/game_model'
import BaseModel from 'infra/shared/base_model'

import GameCollectionRepositoryDTO from './game_collection_repository_dto'

export default class GameCollectionModel extends BaseModel {
  static fromDatabase(
    gameCollection: GameCollectionRepositoryDTO
  ): GameCollection {
    return new GameCollection({
      games: gameCollection.games.map((value) => GameModel.fromDatabase(value)),
      id: gameCollection._id,
      title: gameCollection.title,
    })
  }
}
