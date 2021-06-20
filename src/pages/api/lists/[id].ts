import { NextApiHandler } from 'next'

import GetGamesListByIdUseCase from 'app/games_list/get_games_list_by_id'
import GamesListView from 'infra/games_list/games_list_view'

const GamesListByIdRequestHandler: NextApiHandler = async (req, res) => {
  const gamesList = await GetGamesListByIdUseCase(req.query.id.toString())

  const response = GamesListView.toJSON(gamesList)

  return res.json(response)
}

export default GamesListByIdRequestHandler
