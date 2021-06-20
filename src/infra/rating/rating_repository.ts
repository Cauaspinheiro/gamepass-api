import BaseRepository from 'infra/shared/base_repository'

import RatingRepositoryDTO from './rating_repository_dto'

export default class RatingRepository extends BaseRepository {
  private static async getCollection() {
    return this.getCollectionByName('age_ratings')
  }

  static async findAll(): Promise<RatingRepositoryDTO[]> {
    const collection = await this.getCollection()

    const data = collection.find().toArray()

    return data
  }
}
