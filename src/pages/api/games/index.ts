import { NextApiHandler } from 'next'

import { connectToDatabase } from '../../../database/connection'
import CreateGameUseCase from '../../../use-cases/create_game'

const GamesRequestHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const id = await CreateGameUseCase(JSON.parse(req.body))

    return res.json({ id: id })
  }

  const db = await connectToDatabase()

  const gamesCollection = db.collection('games_view')

  const games = await gamesCollection.find().toArray()

  const response = JSON.parse(JSON.stringify(games))

  return res.json(response)
}

export default GamesRequestHandler
