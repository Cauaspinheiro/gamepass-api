import { ObjectId } from 'mongodb'

import { connectToDatabase } from '../database/connection'
import { Game } from '../entities/game'

export default async function CreateGameUseCase(data: Game): Promise<string> {
  const db = await connectToDatabase()

  const gamesCollection = db.collection('games')

  const id = new ObjectId()
  const game = {
    ...data,
    rating_id: new ObjectId(data.rating),
    _id: id,
  }

  delete game.rating

  await gamesCollection.insertOne(game)

  return id.toHexString()
}
