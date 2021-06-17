import { ObjectId } from 'mongodb'
import { NextApiHandler } from 'next'

import { connectToDatabase } from '../../../database/connection'

const GamesListByIdRequestHandler: NextApiHandler = async (req, res) => {
  const db = await connectToDatabase()

  const { id: gamesListId } = req.query

  const gamesListsCollection = db.collection('games_list_view')

  try {
    const gamesList = await gamesListsCollection.findOne({
      _id: new ObjectId(gamesListId as string),
    })

    const response = JSON.parse(JSON.stringify(gamesList))

    return res.json(response)
  } catch (error) {
    const response = { error: 'INVALID ID', details: error.toString() }

    return res.status(400).json(response)
  }
}

export default GamesListByIdRequestHandler
