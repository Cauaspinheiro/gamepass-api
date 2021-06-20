import { NextApiHandler } from 'next'

import CreateGameUseCase from 'app/game/create_game'
import GetGamesUseCase from 'app/game/get_games'
import GameView from 'infra/game/game_view'

const GamesRequestHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const id = await CreateGameUseCase(JSON.parse(req.body))

    return res.status(201).json({ id: id })
  }

  const games = await GetGamesUseCase()

  const response = games.map((value) => GameView.toJSON(value))

  return res.json(response)
}

export default GamesRequestHandler
