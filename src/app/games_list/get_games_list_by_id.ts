import GamesList from 'domain/games_list'
import GamesListModel from 'infra/games_list/games_list_model'
import GamesListRepository from 'infra/games_list/games_list_repository'

export default async function GetGamesListByIdUseCase(
  id: string
): Promise<GamesList> {
  const data = await GamesListRepository.findById(GamesListModel.toId(id))

  const gamesList = GamesListModel.fromDatabase(data)

  return gamesList
}
