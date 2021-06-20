import { NextApiHandler } from 'next'

import GetGamesListsUseCase from 'app/games_list/get_games_lists'
import GamesListView from 'infra/games_list/games_list_view'

const GamesListsRequestHandler: NextApiHandler = async (_, res) => {
  const gamesLists = await GetGamesListsUseCase()

  const response = gamesLists.map((value) => GamesListView.toJSON(value))

  return res.json(response)
}

export default GamesListsRequestHandler
