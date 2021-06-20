import { Collection } from 'mongodb'

import connectToDatabase from 'infra/database/connection'

export default class BaseRepository {
  protected static async getCollectionByName(
    name: string
  ): Promise<Collection> {
    const database = await connectToDatabase()

    return database.collection(name)
  }
}
