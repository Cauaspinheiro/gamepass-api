import { NextApiHandler } from 'next'

import { connectToDatabase } from '../../database/connection'

const GamesRequestHandler: NextApiHandler = async (_, res) => {
  const db = await connectToDatabase()

  const gamesCollection = db.collection('games_view')

  const games = await gamesCollection.find().toArray()

  const response = JSON.parse(JSON.stringify(games))

  return res.json(response)
}

export default GamesRequestHandler
