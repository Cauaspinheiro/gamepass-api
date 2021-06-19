import { connectToDatabase } from '../../database/connection'
import { Rating } from '../../entities/rating'

export default async function GetRatingsUseCase(): Promise<Rating[]> {
  const db = await connectToDatabase()

  const gamesCollection = db.collection('age_ratings')

  return gamesCollection.find().toArray()
}
