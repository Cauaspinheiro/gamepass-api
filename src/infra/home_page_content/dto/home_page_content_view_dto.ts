import { GameCollectionViewDTO } from 'infra/game_collection/game_collection_view'
import { GameViewDTO } from 'infra/game/game_view'

export default interface HomePageContentViewDTO {
  spotlights: GameCollectionViewDTO
  game_collections: GameCollectionViewDTO[]
  games: GameViewDTO[]
}
