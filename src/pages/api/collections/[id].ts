import { NextApiHandler } from 'next'

import GetGameCollectionByIdUseCase from 'app/game_collection/get_game_collection_by_id'
import GameCollectionView from 'infra/game_collection/game_collection_view'

const GameCollectionByIdRequestHandler: NextApiHandler = async (req, res) => {
  const GameCollection = await GetGameCollectionByIdUseCase(
    req.query.id.toString()
  )

  const response = GameCollectionView.toJSON(GameCollection)

  return res.json(response)
}

export default GameCollectionByIdRequestHandler
