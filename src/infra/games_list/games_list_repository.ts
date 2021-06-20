import { Collection, ObjectId } from 'mongodb'

import BaseRepository from 'infra/shared/base_repository'

import GamesListRepositoryDTO from './games_list_repository_dto'

export default class GamesListRepository extends BaseRepository {
  private static async getCollection(): Promise<Collection> {
    return this.getCollectionByName('games_list_view')
  }

  static async findAll(): Promise<GamesListRepositoryDTO[]> {
    const collection = await GamesListRepository.getCollection()

    const gamesLists = await collection.find().toArray()

    return gamesLists
  }

  static async findById(id: ObjectId): Promise<GamesListRepositoryDTO> {
    const collection = await GamesListRepository.getCollection()

    const gamesList = await collection.findOne({ _id: id })

    return gamesList
  }
}
