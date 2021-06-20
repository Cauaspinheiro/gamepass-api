import Rating from 'domain/rating'
import BaseModel from 'infra/shared/base_model'

import RatingRepositoryDTO from './rating_repository_dto'

export default class RatingModel extends BaseModel {
  static fromDatabase(data: RatingRepositoryDTO): Rating {
    return new Rating({
      age: data.age,
      id: data._id,
      logo: data.logo,
    })
  }
}
