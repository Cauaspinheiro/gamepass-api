import GameCollection from 'domain/game_collection'
import GameCollectionModel from 'infra/game_collection/game_collection_model'
import GameCollectionRepository, {
  GameCollectionRepositoryFindAllProps,
} from 'infra/game_collection/game_collection_repository'

export default async function GetGameCollectionsUseCase(
  props?: GameCollectionRepositoryFindAllProps
): Promise<GameCollection[]> {
  const data = await GameCollectionRepository.findAll(props)

  const gameCollections = data.map((value) =>
    GameCollectionModel.fromDatabase(value)
  )

  return gameCollections
}
