import { Collection } from 'mongodb'

import BaseRepository from 'infra/shared/base_repository'

import SpotlightCollectionRepositoryDTO from './dto/spotlight_collection_repository_dto'

export default class SpotlightCollectionRepository extends BaseRepository {
  private static async getCollection(): Promise<Collection> {
    return this.getCollectionByName('spotlights_view')
  }

  static async findAll(): Promise<SpotlightCollectionRepositoryDTO[]> {
    const collection = await this.getCollection()

    return collection.find().toArray()
  }
}
