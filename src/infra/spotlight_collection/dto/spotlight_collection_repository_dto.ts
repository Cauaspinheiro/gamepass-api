import GameCollectionRepositoryDTO from 'infra/game_collection/game_collection_repository_dto'
import SpotlightRepositoryDTO from 'infra/spotlight/dto/spotlight_repository_dto'

export default interface SpotlightCollectionRepositoryDTO
  extends GameCollectionRepositoryDTO {
  games: Array<SpotlightRepositoryDTO>
}
