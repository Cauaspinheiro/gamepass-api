import { NextApiHandler } from 'next'

import GetGameCollectionsUseCase from 'app/game_collection/get_game_collections'
import GameCollectionView from 'infra/game_collection/game_collection_view'

const GameCollectionsRequestHandler: NextApiHandler = async (req, res) => {
  const max = Number.parseInt(req.query.max?.toString())
  const page = Number.parseInt(req.query.page?.toString())

  const gameCollections = await GetGameCollectionsUseCase({
    page: Number.isSafeInteger(page) ? page : undefined,
    max: Number.isSafeInteger(max) ? max : undefined,
  })

  const response = gameCollections.map((value) =>
    GameCollectionView.toJSON(value)
  )

  return res.json(response)
}

export default GameCollectionsRequestHandler
