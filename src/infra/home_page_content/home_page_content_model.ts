import HomePageContent from 'domain/home_page_content'
import GameCollectionModel from 'infra/game_collection/game_collection_model'
import GameModel from 'infra/game/game_model'
import BaseModel from 'infra/shared/base_model'
import SpotlightCollectionModel from 'infra/spotlight_collection/spotlight_collection_model'

import HomePageContentRepositoryDTO from './dto/home_page_content_repository_dto'

export default class HomePageContentModel extends BaseModel {
  static fromDatabase(data: HomePageContentRepositoryDTO): HomePageContent {
    return new HomePageContent({
      collections: data.game_collections.map((collection) =>
        GameCollectionModel.fromDatabase(collection)
      ),
      games: data.games.map((game) => GameModel.fromDatabase(game)),
      spotlights: SpotlightCollectionModel.fromDatabase(data.spotlights),
    })
  }
}
