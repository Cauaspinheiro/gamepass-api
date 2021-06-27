import { Collection, ObjectId } from 'mongodb'

import BaseRepository, { PaginationOpts } from 'infra/shared/base_repository'

import GameCollectionRepositoryDTO from './game_collection_repository_dto'

export default class GameCollectionRepository extends BaseRepository {
  private static async getCollection(): Promise<Collection> {
    return this.getCollectionByName('game_collections_view')
  }

  static async findAll(
    props?: PaginationOpts
  ): Promise<GameCollectionRepositoryDTO[]> {
    const collection = await GameCollectionRepository.getCollection()

    const cursor = this.paginated(collection, props)

    return cursor.toArray()
  }

  static async findById(id: ObjectId): Promise<GameCollectionRepositoryDTO> {
    const collection = await GameCollectionRepository.getCollection()

    const GameCollection = await collection.findOne({ _id: id })

    return GameCollection
  }
}
