import { NextApiHandler } from 'next'

import { connectToDatabase } from '../../../database/connection'

const GamesListsRequestHandler: NextApiHandler = async (_, res) => {
  const db = await connectToDatabase()

  const gamesListsCollection = db.collection('games_list_view')

  const games_lists = await gamesListsCollection.find().toArray()

  const response = JSON.parse(JSON.stringify(games_lists))

  return res.json(response)
}

export default GamesListsRequestHandler
