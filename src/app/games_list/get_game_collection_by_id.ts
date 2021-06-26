import GameCollection from 'domain/game_collection'
import GameCollectionModel from 'infra/game_collection/game_collection_model'
import GameCollectionRepository from 'infra/game_collection/game_collection_repository'

export default async function GetGameCollectionByIdUseCase(
  id: string
): Promise<GameCollection> {
  const data = await GameCollectionRepository.findById(
    GameCollectionModel.toId(id)
  )

  const gameCollection = GameCollectionModel.fromDatabase(data)

  return gameCollection
}
