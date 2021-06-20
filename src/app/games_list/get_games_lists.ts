import GamesList from 'domain/games_list'
import GamesListModel from 'infra/games_list/games_list_model'
import GamesListRepository from 'infra/games_list/games_list_repository'

export default async function GetGamesListsUseCase(): Promise<GamesList[]> {
  const data = await GamesListRepository.findAll()

  const gamesLists = data.map((value) => GamesListModel.fromDatabase(value))

  return gamesLists
}
