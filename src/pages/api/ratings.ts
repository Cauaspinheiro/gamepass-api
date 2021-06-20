import { NextApiHandler } from 'next'

import GetRatingsUseCase from 'app/rating/get_ratings'

const RatingsRequestHandler: NextApiHandler = async (_, res) => {
  const response = await GetRatingsUseCase()

  return res.json(response)
}

export default RatingsRequestHandler
