import Rating from 'domain/rating'
import RatingModel from 'infra/rating/rating_model'
import RatingRepository from 'infra/rating/rating_repository'

export default async function GetRatingsUseCase(): Promise<Rating[]> {
  const data = await RatingRepository.findAll()

  const ratings = data.map((value) => RatingModel.fromDatabase(value))

  return ratings
}
