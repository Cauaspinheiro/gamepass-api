import { GameRepositoryDTO } from 'infra/game/game_repository_dto'

export default interface SpotlightRepositoryDTO extends GameRepositoryDTO {
  spotlight_title?: string
  spotlight_cover?: string
  spotlight_description?: string
}
