import { ObjectId } from 'mongodb'
import { NextApiHandler } from 'next'

import { connectToDatabase } from '../../../database/connection'

const GameByIdRequestHandler: NextApiHandler = async (req, res) => {
  const db = await connectToDatabase()

  const { id: gameId } = req.query

  const gamesCollection = db.collection('games_view')

  try {
    const game = await gamesCollection.findOne({
      _id: new ObjectId(gameId as string),
    })

    return res.json(game)
  } catch (error) {
    const response = { error: 'INVALID ID', details: error.toString() }

    return res.status(400).json(response)
  }
}

export default GameByIdRequestHandler
