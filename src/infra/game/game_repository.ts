import { Collection, ObjectId } from 'mongodb'

import BaseRepository from 'infra/shared/base_repository'

import {
  CreateGameRepositoryDTO,
  GameRepositoryDTO,
} from './game_repository_dto'

export default class GameRepository extends BaseRepository {
  private static getCollection(): Promise<Collection> {
    return this.getCollectionByName('games_view')
  }

  static async findAll(): Promise<GameRepositoryDTO[]> {
    const gamesCollection = await this.getCollection()

    const games = await gamesCollection.find().toArray()

    return games
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
