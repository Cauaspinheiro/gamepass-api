import SpotlightCollection from 'domain/spotlight_collection'
import GameCollectionModel from 'infra/game_collection/game_collection_model'
import BaseModel from 'infra/shared/base_model'
import SpotlightModel from 'infra/spotlight/spotlight_model'

import SpotlightCollectionRepositoryDTO from './dto/spotlight_collection_repository_dto'

export default class SpotlightCollectionModel extends BaseModel {
  static fromDatabase(
    data: SpotlightCollectionRepositoryDTO
  ): SpotlightCollection {
    return new SpotlightCollection({
      ...GameCollectionModel.fromDatabase(data),

      games: data.games.map((value) => SpotlightModel.fromDatabase(value)),
    })
  }
}
