import { Collection } from 'mongodb'

import BaseRepository from 'infra/shared/base_repository'

import PageContentRepositoryDTO from './page_content_repository_dto'

export default class PageContentRepository extends BaseRepository {
  private static async getCollection(): Promise<Collection> {
    return this.getCollectionByName('page_data_view')
  }

  static async findAll(): Promise<PageContentRepositoryDTO[]> {
    const collection = await this.getCollection()

    const data = await collection.find().toArray()

    return data
  }

  static async findByTitle(title: string): Promise<PageContentRepositoryDTO> {
    const collection = await this.getCollection()

    const data = await collection.findOne({ title })

    return data
  }
}
