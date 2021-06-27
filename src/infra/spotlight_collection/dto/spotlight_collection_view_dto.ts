import { GameCollectionViewDTO } from 'infra/game_collection/game_collection_view'
import SpotlightViewDTO from 'infra/spotlight/dto/spotlight_view_dto'

export default interface SpotlightCollectionViewDTO
  extends GameCollectionViewDTO {
  games: Array<SpotlightViewDTO>
}
