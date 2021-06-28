import GameCollectionRepository from 'infra/game_collection/game_collection_repository'
import GameCollectionRepositoryDTO from 'infra/game_collection/game_collection_repository_dto'
import GameRepository from 'infra/game/game_repository'
import { GameRepositoryDTO } from 'infra/game/game_repository_dto'
import BaseRepository from 'infra/shared/base_repository'
import SpotlightCollectionRepositoryDTO from 'infra/spotlight_collection/dto/spotlight_collection_repository_dto'
import SpotlightCollectionRepository from 'infra/spotlight_collection/spotlight_collection_repository'

import HomePageContentRepositoryDTO from './dto/home_page_content_repository_dto'

export default class HomePageContentRepository extends BaseRepository {
  private static async getSpotlights(): Promise<SpotlightCollectionRepositoryDTO> {
    const data = await SpotlightCollectionRepository.findAll()

    return data[data.length - 1] // RETURNS THE LAST CREATED SPOTLIGHT
  }

  private static async getGameCollections(): Promise<
    GameCollectionRepositoryDTO[]
  > {
    return GameCollectionRepository.findAll({ max: 5 })
  }

  private static async getGames(): Promise<GameRepositoryDTO[]> {
    return GameRepository.findAll({ max: 9 })
  }

  static async getHomePageContent(): Promise<HomePageContentRepositoryDTO> {
    const spotlightPromise = this.getSpotlights()
    const gameCollectionsPromise = this.getGameCollections()
    const gamesPromise = this.getGames()

    const [spotlights, game_collections, games] = await Promise.all([
      spotlightPromise,
      gameCollectionsPromise,
      gamesPromise,
    ])

    return { spotlights, game_collections, games }
  }
}
