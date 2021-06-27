import Spotlight from 'domain/spotlight'
import GameModel from 'infra/game/game_model'
import BaseModel from 'infra/shared/base_model'

import SpotlightRepositoryDTO from './dto/spotlight_repository_dto'

export default class SpotlightModel extends BaseModel {
  static fromDatabase(data: SpotlightRepositoryDTO): Spotlight {
    return new Spotlight({
      ...GameModel.fromDatabase(data),

      spotlightCover: data.spotlight_cover || data.logo,
      spotlightDescription: data.spotlight_description || data.description,
      spotlightTitle: data.spotlight_title || data.title,
    })
  }
}
