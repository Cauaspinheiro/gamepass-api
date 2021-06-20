import { GameRepositoryDTO } from 'infra/game/game_repository_dto'
import GamesListRepositoryDTO from 'infra/games_list/games_list_repository_dto'

export default interface PageContentRepositoryDTO {
  _id: string
  title: string
  spotlight: GameRepositoryDTO
  games_lists: GamesListRepositoryDTO[]
}
