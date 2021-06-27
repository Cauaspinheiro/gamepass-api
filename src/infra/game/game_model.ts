import { ObjectId } from 'mongodb'

import CreateGameDTO from 'app/game/create_game_dto'
import Game from 'domain/game'
import RatingModel from 'infra/rating/rating_model'
import BaseModel from 'infra/shared/base_model'

import {
  GameRepositoryDTO,
  CreateGameRepositoryDTO,
} from './game_repository_dto'

export default class GameModel extends BaseModel {
  static fromDatabase(data: GameRepositoryDTO): Game {
    return new Game({
      id: data._id,
      description: data.description,
      logo: data.logo,
      publisher: data.publisher,
      rating: RatingModel.fromDatabase(data.rating),
      ratingReasons: data.rating_reasons,
      size: data.size,
      title: data.title,
      trailer: data.trailer,
    })
  }

  static toDatabase(data: CreateGameDTO): CreateGameRepositoryDTO {
    return {
      ...data,
      rating_id: new ObjectId(data.rating_id),
      _id: new ObjectId(),
    }
  }
}
