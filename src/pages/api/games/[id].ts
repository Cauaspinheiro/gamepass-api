import { NextApiHandler } from 'next'

import GetGameByIdUseCase from 'app/game/get_game_by_id'
import GameView from 'infra/game/game_view'

const GameByIdRequestHandler: NextApiHandler = async (req, res) => {
  const game = await GetGameByIdUseCase(req.query.id.toString())

  const response = GameView.toJSON(game)

  return res.json(response)
}

export default GameByIdRequestHandler
