import { Collection, Cursor, ObjectId } from 'mongodb'

import connectToDatabase from 'infra/database/connection'

export interface PaginationOpts {
  page?: number
  max?: number
}

interface BaseCollection<BaseGame> {
  games: Array<BaseGame>
  sort_order: Array<ObjectId>
  _id: string
  title: string
}

interface ReturnCollection<BaseGame> {
  _id: string
  games: BaseGame[]
  title: string
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

  protected static sortCollectionGames<BaseGame extends { _id: string }>(
    gameCollection: BaseCollection<BaseGame>
  ): ReturnCollection<BaseGame> {
    const games = gameCollection.sort_order.map((gameId) => {
      return gameCollection.games.find((value) => {
        const gameObjId = new ObjectId(value._id).toHexString()

        return gameObjId === gameId.toHexString()
      })
    })

    return {
      _id: gameCollection._id,
      games: games as BaseGame[],
      title: gameCollection.title,
    }
  }
}
