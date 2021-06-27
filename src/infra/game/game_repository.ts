import { Collection, ObjectId } from 'mongodb'

import BaseRepository, { PaginationOpts } from 'infra/shared/base_repository'

import {
  CreateGameRepositoryDTO,
  GameRepositoryDTO,
} from './game_repository_dto'

export default class GameRepository extends BaseRepository {
  private static getCollection(): Promise<Collection> {
    return this.getCollectionByName('games_view')
  }

  static async findAll(props?: PaginationOpts): Promise<GameRepositoryDTO[]> {
    const collection = await GameRepository.getCollection()

    const cursor = this.paginated(collection, props)

    return cursor.toArray()
  }

  static async findById(id: ObjectId): Promise<GameRepositoryDTO> {
    const gamesCollection = await this.getCollection()

    const game = await gamesCollection.findOne({ _id: id })

    return game
  }

  static async create(game: CreateGameRepositoryDTO): Promise<string> {
    const gamesCollection = await this.getCollectionByName('games')

    await gamesCollection.insertOne(game)

    return game._id.toHexString()
  }
}
