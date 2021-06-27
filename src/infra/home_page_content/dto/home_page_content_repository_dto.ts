import GameCollectionRepositoryDTO from 'infra/game_collection/game_collection_repository_dto'
import { GameRepositoryDTO } from 'infra/game/game_repository_dto'

export default interface HomePageContentRepositoryDTO {
  spotlights: GameCollectionRepositoryDTO
  game_collections: GameCollectionRepositoryDTO[]
  games: GameRepositoryDTO[]
}
