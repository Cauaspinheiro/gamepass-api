import { Collection, ObjectId } from 'mongodb'

import BaseRepository from 'infra/shared/base_repository'

import GameCollectionRepositoryDTO from './game_collection_repository_dto'

export interface GameCollectionRepositoryFindAllProps {
  page?: number
  max?: number
}

export default class GameCollectionRepository extends BaseRepository {
  private static async getCollection(): Promise<Collection> {
    return this.getCollectionByName('game_collections_view')
  }

  static async findAll(
    props?: GameCollectionRepositoryFindAllProps
  ): Promise<GameCollectionRepositoryDTO[]> {
    const collection = await GameCollectionRepository.getCollection()

    const cursor = collection.find()

    const page = props?.page || 0

    if (props?.max) cursor.skip(page * props.max).limit(props.max)

    const gameCollections = await cursor.toArray()

    return gameCollections
  }

  static async findById(id: ObjectId): Promise<GameCollectionRepositoryDTO> {
    const collection = await GameCollectionRepository.getCollection()

    const GameCollection = await collection.findOne({ _id: id })

    return GameCollection
  }
}
