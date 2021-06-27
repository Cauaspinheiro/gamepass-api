import GameCollection from 'domain/game_collection'
import GameCollectionModel from 'infra/game_collection/game_collection_model'
import GameCollectionRepository from 'infra/game_collection/game_collection_repository'
import { PaginationOpts } from 'infra/shared/base_repository'

export default async function GetGameCollectionsUseCase(
  props?: PaginationOpts
): Promise<GameCollection[]> {
  const data = await GameCollectionRepository.findAll(props)

  const gameCollections = data.map((value) =>
    GameCollectionModel.fromDatabase(value)
  )

  return gameCollections
}
