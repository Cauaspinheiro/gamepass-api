import { GameRepositoryDTO } from 'infra/game/game_repository_dto'

export default interface GameCollectionRepositoryDTO {
  _id: string
  title: string
  games: Array<GameRepositoryDTO>
}
