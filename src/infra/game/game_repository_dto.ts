import { ObjectId } from 'mongodb'

import CreateGameDTO from 'app/game/create_game_dto'

export interface GameRepositoryDTO {
  _id: string
  title: string
  publisher: string
  logo: string
  trailer: string
  description: string
  rating_reasons: string[]
  size: string
  rating: {
    _id: string
    logo: string
    age: string
  }
  spotlight_slug: string
  created_at: number
}

type BaseCreateGameDTO = Omit<CreateGameDTO, 'rating_id'>

export interface CreateGameRepositoryDTO extends BaseCreateGameDTO {
  rating_id: ObjectId
  _id: ObjectId
  created_at: number
}
