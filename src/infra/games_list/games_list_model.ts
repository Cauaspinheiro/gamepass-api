import GamesList from 'domain/games_list'
import GameModel from 'infra/game/game_model'
import BaseModel from 'infra/shared/base_model'

import GamesListRepositoryDTO from './games_list_repository_dto'

export default class GamesListModel extends BaseModel {
  static fromDatabase(gamesList: GamesListRepositoryDTO): GamesList {
    return new GamesList({
      games: gamesList.games.map((value) => GameModel.fromDatabase(value)),
      id: gamesList._id,
      title: gamesList.title,
    })
  }
}
