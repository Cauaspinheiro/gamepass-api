import { Collection, Cursor } from 'mongodb'

import connectToDatabase from 'infra/database/connection'

export interface PaginationOpts {
  page?: number
  max?: number
}

export default abstract class BaseRepository {
  protected static async getCollectionByName(
    name: string
  ): Promise<Collection> {
    const database = await connectToDatabase()

    return database.collection(name)
  }

  protected static paginated<T>(
    collection: Collection<T>,
    { page: optsPage, max }: PaginationOpts = {}
  ): Cursor<T> {
    const cursor = collection.find()

    const page = optsPage || 0

    if (max) cursor.skip(page * max).limit(max)

    return cursor
  }
}
